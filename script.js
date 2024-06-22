// Sample data for winning times in minutes
const winningTimes = [45, 60, 30, 50, 65, 55, 40, 70, 35, 50];

// Calculate average winning time
const averageTime = winningTimes.reduce((a, b) => a + b, 0) / winningTimes.length;
document.getElementById('average-time').innerText = averageTime.toFixed(2);

// Create the chart
const ctx = document.getElementById('winningTimeChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: winningTimes.map((_, index) => `Match ${index + 1}`),
        datasets: [{
            label: 'Winning Time (minutes)',
            data: winningTimes,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
