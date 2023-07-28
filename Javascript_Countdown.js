let timerInterval;
        let timeRemaining = 0;
        let isPaused = false;

        function updateTimerDisplay() {
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = timeRemaining % 60;

            const hoursDisplay = String(hours).padStart(2, '0');
            const minutesDisplay = String(minutes).padStart(2, '0');
            const secondsDisplay = String(seconds).padStart(2, '0');

            document.getElementById('timer').innerText = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
        }

        function startTimer() {
            const inputField = document.querySelector('.input-field');
            const inputTime = parseInt(inputField.value);

            if (!isNaN(inputTime) && inputTime > 0) {
                if (!isPaused) {
                    timeRemaining = inputTime;
                    updateTimerDisplay();
                }

                if (!timerInterval || isPaused) {
                    timerInterval = setInterval(function () {
                        if (!isPaused) {
                            timeRemaining--;
                            updateTimerDisplay();

                            if (timeRemaining <= 0) {
                                clearInterval(timerInterval);
                                alert('Timer has ended!');
                            }
                        }
                    }, 1000);
                }

                isPaused = false;
            } else {
                alert("Please enter a valid time in seconds.");
            }
        }

        function pauseTimer() {
            isPaused = true;
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timeRemaining = 0;
            updateTimerDisplay();
            isPaused = false;
            document.querySelector('.input-field').value = '';
        }
