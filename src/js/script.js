import 'bootstrap/dist/css/bootstrap.min.css';
import { getRandom } from '@anilseervi/inspirational-quotes'

document.getElementById('new-quote').addEventListener('click', function() {
    const quoteText = getRandom();
    document.getElementById('quote').textContent = quoteText.quote + " - " + quoteText.author;
});
