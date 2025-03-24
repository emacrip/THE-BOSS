  <script>
        // Enhanced interactions
        const interactiveElements = [...document.querySelectorAll('h1, img, .boton')];
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.transform = element === document.querySelector('h1') ? 'scale(1.1)' : 'scale(1.05)';
                if(element === document.querySelector('img')) {
                    element.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
                }
            });
            
            element.addEventListener('mouseout', () => {
                element.style.transform = 'scale(1)';
                if(element === document.querySelector('img')) {
                    element.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
                }
            });
        });

        // Typewriter effect for title
        const title = document.querySelector('h1');
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        setTimeout(typeWriter, 500);
    </script>
</body>
</html>