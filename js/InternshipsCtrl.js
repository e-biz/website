var InternshipsCtrl = function ($scope) {
  $scope.download = function (url) {
    window.open(url);
  };

  $scope.internships = [

    {title: "Serious game Android et iPad",
      pdf: "http://www.ebusinessinformation.fr/img/stages2015/REC.StageG3.Serious_Game_Tablette_Android_IPad.2016.T1.1.pdf",
      description: [
        "Outils et normes Java/JEE",
        "Serveurs d’applications JBoss/Tomcat",
        "Web services, JSON",
        "Android, IOS (IPhone, Ipod, IPad), AndroidAnnotations",
        "La méthode agile SCRUM"
      ]},

    {title: "App Mobile",
      pdf: "http://www.ebusinessinformation.fr/img/stages2015/REC.StageG3.CAPICO_Android_IPad.2016.T1.1.pdf",
      description: [
        "Outils et normes Java/JEE",
        "Serveurs d’applications Tomcat",
        "Web services, JSON",
        "Plateforme Android (google), IOS (IPhone, Ipod, IPad), AndroidAnnotations",
        "La méthode agile SCRUM pour le suivi du projet"
      ]},

    {title: "Gatling Stress Tool",
      pdf: "http://www.ebusinessinformation.fr/img/stages2015/REC.StageG3.Gatling.2016.T1.1.pdf",
      description: [
        "Scala",
        "Akka",
        "Eclipse",
        "Diverses librairies Java"
      ]},

    {title: "Web App HTML5, CSS3, AngularJS",
      pdf: "http://www.ebusinessinformation.fr/img/stages2015/REC.StageG3.CAPICO_HTML5_CSS3.2016.T1.1.pdf",
      description: [
        "Outils et normes Java/JEE",
        "Serveurs d’applications Tomcat",
        "Web services",
        "Plateforme Android, Ipad, Surface",
        "La méthode agile SCRUM pour le suivi du projet"
      ]},

    {title: "Design My App",
      pdf: "http://www.ebusinessinformation.fr/img/stages2015/REC.StageG3.DESIGNMYAPP_JAVA_HTML5_CSS3_ANGULARJS_ANDROID_CORDOVA.2016.T1.1.pdf",
      description: [
        "Outils et normes Java/JEE, Spring, Maven",
        "MongoDB",
        "Conteneur web Tomcat",
        "Web services REST",
        "Clients mobiles Android, IOS",
        "Clients web HTML5, CSS3, et AngularJS",
        "Docker, OpenStack",
        "Une approche agile SCRUM/KANBAN pour le suivi du projet"
      ]}
  ];

};

angular.module('ebizApp').controller('InternshipsCtrl', ['$scope', InternshipsCtrl]);