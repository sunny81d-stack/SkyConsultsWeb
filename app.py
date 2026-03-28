from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

# --- CONFIGURATION ---
# Use your real SMTP details here (e.g., from WebHostMost or Hostinger)
SMTP_SERVER = 'mail.skyconsults.in' # Example for your domain
SMTP_PORT = 587
SMTP_USER = 'support@skyconsults.in' 
SMTP_PASSWORD = 'Pr0t0c0l@12' 

def send_email(subject, body, to_email):
    try:
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = SMTP_USER
        msg['To'] = to_email

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, [to_email], msg.as_string())
        return True
    except Exception as e:
        print(f"Email Error: {e}")
        return False

# 1. Added this route to fix the "GET / 404" error
@app.route('/')
def index():
    return "SkyConsults Backend is Running!"

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    if not data:
        return jsonify({'status': 'error', 'message': 'No data received'}), 400
        
    subject = data.get('subject', 'Contact Form Submission')
    message_body = data.get('message', '')
    
    # 2. Improved logic to check if email actually sent
    success = send_email(subject, message_body, 'support@skyconsults.in')
    
    if success:
        return jsonify({'status': 'success', 'message': 'Email sent!'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Failed to send email. Check SMTP settings.'}), 500

if __name__ == '__main__':
    # Using 127.0.0.1 for local testing to match your React proxy
    app.run(host='127.0.0.1', port=5001, debug=True)