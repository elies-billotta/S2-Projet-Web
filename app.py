import sqlite3
from model import *
from flask import Flask , render_template
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game')
def game():
    difficulte = get_difficulte()
    return render_template('game.html',levels=difficulte)

@app.route('/round')
def round():
    film = get_random_film()
    leaderboard = get_leaderboard()
    return render_template('round.html',film=film, leaderboard = leaderboard)
