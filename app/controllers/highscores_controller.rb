class HighscoresController < ApplicationController
  # GET /highscores
  # GET /highscores.json
  def index
    @highscores = Highscore.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @highscores }
    end
  end

  # GET /highscores/1
  # GET /highscores/1.json
  def show
    @highscore = Highscore.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @highscore }
    end
  end

  # GET /highscores/new
  # GET /highscores/new.json
  def new
    @highscore = Highscore.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @highscore }
    end
  end

  # GET /highscores/1/edit
  def edit
    @highscore = Highscore.find(params[:id])
  end

  # POST /highscores
  # POST /highscores.json
  def create
    @highscore = Highscore.new(params[:highscore])

    respond_to do |format|
      if @highscore.save
        format.html { redirect_to @highscore, notice: 'Highscore was successfully created.' }
        format.json { render json: @highscore, status: :created, location: @highscore }
      else
        format.html { render action: "new" }
        format.json { render json: @highscore.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /highscores/1
  # PUT /highscores/1.json
  def update
    @highscore = Highscore.find(params[:id])

    respond_to do |format|
      if @highscore.update_attributes(params[:highscore])
        format.html { redirect_to @highscore, notice: 'Highscore was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @highscore.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /highscores/1
  # DELETE /highscores/1.json
  def destroy
    @highscore = Highscore.find(params[:id])
    @highscore.destroy

    respond_to do |format|
      format.html { redirect_to highscores_url }
      format.json { head :no_content }
    end
  end
end
