import 'bootstrap/dist/css/bootstrap.min.css';
import { getQuote } from 'inspirational-quotes';

document.getElementById('new-quote').addEventListener('click', function() {
    const quoteText = getQuote();
    document.getElementById('quote').textContent = quoteText.text + " - " + quoteText.author;
});
