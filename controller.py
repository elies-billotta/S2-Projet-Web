import sqlite3
from flask import Flask , render_template
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/', methods["POST"])
def index():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    cur = connection.cursor()
    test = cur.execute('SELECT * FROM test')
    connection.commit()
    return render_template('index.html',test=test)

@app.route('/game')
def game():
    return render_template('game.html')


#---------------------------------- EN COURS ----------------------------------#
# @app.route('/game/round')
# def chooseMovie():
#     cur = connection.cursor()
#     test = cur.execute('SELECT * FROM film ORDER BY RAND() LIMIT 1')
#     connection.commit()
#     connection.close()
#     #return render_template('game.html')
