from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

# Email configuration
SMTP_SERVER = 'smtp.your-email-provider.com'
SMTP_PORT = 587  # or your provider's SMTP port
SMTP_USER = 'your_email@example.com'
SMTP_PASSWORD = 'your_password'

def send_email(subject, body, to_email):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = SMTP_USER
    msg['To'] = to_email

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.sendmail(SMTP_USER, [to_email], msg.as_string())

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    subject = data.get('subject', 'Contact Form Submission')
    body = data.get('message', '')
    send_email(subject, body, 'support@skyconsults.in')
    return jsonify({'status': 'success', 'message': 'Email sent!'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)