
        function handleNext() {
            const email = document.getElementById('emailInput').value;
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            console.log('Proceeding with email:', email);
            // Here you would typically navigate to the next step
            alert('Next step would go here!');
        }

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function togglePhoneInput() {
            const label = document.querySelector('.form-label');
            const input = document.getElementById('emailInput');
            const link = document.querySelector('.phone-link');
            
            if (input.type === 'email') {
                label.textContent = 'Phone number';
                input.type = 'tel';
                input.placeholder = '+1 (555) 000-0000';
                link.textContent = 'Use email address instead.';
            } else {
                label.textContent = 'Email address';
                input.type = 'email';
                input.placeholder = 'name@domain.com';
                link.textContent = 'Use phone number instead.';
            }
            input.value = '';
        }

        function signupWithGoogle() {
            console.log('Sign up with Google clicked');
            alert('Google sign-up would be handled here!');
        }

        function signupWithApple() {
            console.log('Sign up with Apple clicked');
            alert('Apple sign-up would be handled here!');
        }

        function handleLogin() {
            console.log('Login clicked');
            alert('Login page would open here!');
        }

        // Add input focus animation
        document.getElementById('emailInput').addEventListener('focus', function() {
            this.style.borderColor = '#fff';
        });

        document.getElementById('emailInput').addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#727272';
            }
        });
 