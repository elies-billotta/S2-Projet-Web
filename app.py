import sqlite3
from flask import Flask , render_template
app = Flask(__name__, template_folder='templates', static_folder='static')

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    test = conn.execute('SELECT * FROM test').fetchall()
    conn.close()
    return render_template('index.html',test=test)


@app.route('/game')
def game():
    return render_template('game.html')
