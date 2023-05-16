import sqlite3
from flask import Flask , render_template
app = Flask(__name__, template_folder='templates', static_folder='static')

#get a random movie from the database
@app.route('/')
def index():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    test = cur.execute('SELECT * FROM film ORDER BY RANDOM() LIMIT 1')
    connection.commit()
    return render_template('index.html',test=test)

@app.route('/game')
def game():
    return render_template('game.html')