import React from "react";


function NewsletterRegistration() {

  const emailInputRef = React.useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <section className="newsletter">
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className="newsletter-control">
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;