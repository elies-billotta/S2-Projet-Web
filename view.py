def show_movie()request, movie_id):
    movie = Movie.objects.get(id=movie_id)
    return render(request, 'movie.html', {'movie': movie})