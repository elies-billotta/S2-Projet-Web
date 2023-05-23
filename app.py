import sqlite3
from model import *
from flask import Flask , render_template, request
from flask import current_app, flash, jsonify, make_response, redirect, request, url_for
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    leaderboard = get_leaderboard(10)
    return render_template('index.html', leaderboard = leaderboard)

@app.route('/game')
def game():
    difficulte = get_difficulte()
    return render_template('game.html',levels=difficulte)

@app.route('/api/getfilm/<int:level>', methods=['GET'])
def getFilm(level):
    film=get_random_film_by_difficulte(level)
    return  jsonify(film.__dict__)
