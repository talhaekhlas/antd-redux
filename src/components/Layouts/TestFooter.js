import React from 'react';

const TestFooter = () => {
    return (
        <div>
            <footer id="footer">
				<div className="inner">

					<h3>Get in touch</h3>

					<form action="#" method="post">

						<div className="field half first">
							<label for="name">Name</label>
							<input name="name" id="name" type="text" placeholder="Name"/>
						</div>
						<div className="field half">
							<label for="email">Email</label>
							<input name="email" id="email" type="email" placeholder="Email"/>
						</div>
						<div class="field">
							<label for="message">Message</label>
							<textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
						</div>
						<ul class="actions">
							<li><input value="Send Message" class="button alt" type="submit"/></li>
						</ul>
					</form>

					<div class="copyright">
						&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.
					</div>

				</div>
			</footer>
        </div>
    );
};

export default TestFooter;