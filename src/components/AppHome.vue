<template >

  <div>
<img src="../assets/freak.png" alt="freak">

  <div class="container">


    <div class="box">


        <div class="photo">
          <img src="../assets/RDR2.jpg" alt="RDR2">
        </div>

        <div class="text">
        <h2>Red Dead Redemption</h2>
        <p> <inline class='Synopsis'> Synopsis :</inline> Suite du précédent volet multi récompensé, Red Dead Redemption
          II nous permettra de nous replonger sur PS4 dans une ambiance western synonyme de
           vastes espaces sauvages et de villes malfamées. L'histoire se déroule en 1899, avant
            le premier Red Dead Redemption, au moment où Arthur Morgan doit fuir avec sa bande à la suite
             d'un braquage raté. Duels sous un soleil de plomb et grande aventure se
             partageront la vedette dès la fin de l'année 2018. <router-link to='/RDR2'> Voir plus. </router-link></p>
        <p> <inline class='Synopsis'> Date de sortie :</inline> 26 octobre 2018 </p>
        </div>
      </div>



    <div class="box">


        <div class="photo">
          <img src="../assets/NBA.jpg" alt="NBA">
        </div>

        <div class="text">
        <h2>NBA 2k19</h2>
        <p> <inline class='Synopsis'> Synopsis :</inline> NBA 2K19 est la mouture 2019 du célèbre
          jeu de basket. Celle-ci possède une particularité : elle symbolise les vingt ans de la
          franchise de 2K Games et Visual Concepts. A cette occasion, nous découvrirons une démo
          intitulée "Le Prélude" avant de retrouver l'expérience tant attendue avec ses différents
           modes de jeu et un Lebron James en première de couverture. <router-link to='/NBA'> Voir plus. </router-link></p>
        <p> <inline class='Synopsis'> Date de sortie :</inline> 11 septembre 2018 </p>
        </div>
      </div>


      <div class="box">


              <div class="photo">
                <img src="../assets/spiderman.jpg" alt="RDR2">
              </div>

              <div class="text">
                <h2>Spiderman</h2>
                <p> <inline class='Synopsis'> Synopsis :</inline> Spider-Man est un
                jeu d'action sur PlayStation 4. Le Tisseur est de retour pour le
                plaisir des joueurs qui pourront alterner phases d'exploration en
                voltigeant de building en building, phases d’infiltration et affrontements
                contre les super-vilains comme Le Caïd, Vulture, Electro, Mister Negative,
                etc. <router-link to='/Spiderman'> Voir plus. </router-link></p>
                <p> <inline class='Synopsis'> Date de sortie :</inline> 07 septembre 2018 </p>

              </div>


              </div>

              <div class="box">


                  <div class="photo">
                    <img src="../assets/GOW.jpg" alt="RDR2">
                  </div>

                  <div class="text">
                  <h2>God Of War</h2>
                  <p> <inline class='Synopsis'> Synopsis :</inline>Dans ce nouvel
                    épisode de God Of War, le héros évoluera dans un monde aux inspirations
                    nordiques, très forestier et montagneux. Dans ce beat-them-all, un enfant
                     accompagnera le héros principal, pouvant apprendre des actions du joueur,
                      et même gagner de l'expérience.<router-link to='/GOW'> Voir plus. </router-link></p>
                  <p> <inline class='Synopsis'> Date de sortie :</inline> 20 avril 2018 </p>
                  </div>
                </div>

                <div class="box">


                    <div class="photo">
                      <img src="../assets/mario.jpg" alt="RDR2">
                    </div>

                    <div class="text">
                    <h2>Super Mario Odyssey</h2>
                    <p> <inline class='Synopsis'> Synopsis :</inline> Super Mario Odyssey
                       est un jeu de plate-forme sur Switch où la princesse Peach a été enlevée
                        par Bowser. Pour la sauver, Mario quitte le royaume Champignon à bord
                        de l'Odyssey. Accompagné de Chappy, son chapeau vivant, il doit parcourir
                        différents royaumes et faire tout pour vaincre, une nouvelle fois,
                        le terrible Bowser.<router-link to='/Mario'> Voir plus. </router-link></p>
                    <p> <inline class='Synopsis'> Date de sortie :</inline> 27 octobre 2017 </p>
                    </div>
                  </div>

    </div>


  </div>
</template>

<script>

  </script>

<style>

h2, h1 {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;

}

.box {
  display: flex;
  margin-bottom: 20px;
  background-color: #E0E0E0;
}

.text {
  padding: 20px;
  padding-left: 30px;
  text-align: justify;
}

.photo {
  padding: 20px;
}

.Synopsis {
  text-decoration: underline;
  font-weight: bold;
}

</style>
