import React, { useState } from 'react';
import '../styles/RERADisclaimer.css';

function RERADisclaimer() {
  const [text, setText] = useState('RERA Disclaimer: All content is for informational purposes only. Images are indicative and may not represent final deliverables. The project is registered with [State] RERA under Registration No. [Your RERA Registration Number].');
  const [edit, setEdit] = useState(false);

  return (
    <section className="rera-disclaimer">
      <div className="container">
        <div className="disclaimer-header">
          <h3>📋 RERA Disclaimer</h3>
          <button onClick={() => setEdit(!edit)}>{edit ? '✓ Save' : '✏️ Edit'}</button>
        </div>
        {!edit && <p>{text}</p>}
        {edit && <textarea value={text} onChange={(e) => setText(e.target.value)} rows="4"></textarea>}
      </div>
    </section>
  );
}

export default RERADisclaimer;
