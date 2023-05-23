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

@app.route('/api/getfilm/<string:level>', methods=['GET'])
def getFilm(level):
    film = get_random_film_by_difficulte(level)
    print(film)
    if film:
        film_dict = {
            'id_film': film.id_film,
            'Image': film.image,
            'Nom': film.nom,
            'Difficulte': film.difficulte
        }
        return jsonify(film_dict)
    else:
        return jsonify({'error': 'No film found for the given difficulty level.'}), 404
    


@app.route('/api/score', methods=['POST'])
def handle_score():
    data = request.json
    nom = data['nom']
    score = data['score']
    #si joueur non existant 
    if (joueur_present(nom)==False):
        create_new_joueur(nom)

    if (score > get_score_joueur(nom)):
        update_score_joueur(nom, score)


    