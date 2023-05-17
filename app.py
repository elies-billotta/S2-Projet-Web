import sqlite3
from model import *
from flask import Flask , render_template, request
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    leaderboard = get_leaderboard(10)
    return render_template('index.html', leaderboard = leaderboard)

@app.route('/game')
def game():
    difficulte = get_difficulte()
    return render_template('game.html',levels=difficulte)

@app.route('/round', methods=['POST'])
def round():
    if (request.form["nom"] != ""):
        create_new_joueur(request.form["nom"])
    film = get_random_film()
    leaderboard = get_leaderboard(10)
    return render_template('round.html',film=film, leaderboard = leaderboard)
