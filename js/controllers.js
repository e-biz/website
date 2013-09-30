'use strict';

/* Controllers */


function Links($scope) {

    $scope.redirect = function (url, $event) {
        if ($event) {
            if ($event.stopPropagation) $event.stopPropagation();
            if ($event.preventDefault) $event.preventDefault();
            $event.cancelBubble = true;
            $event.returnValue = false;
        }
        window.open(url);
    }

}

function Internships($scope) {
    $scope.download = function (url) {
        window.open(url);
    }

    $scope.internships = [

        {title: "Serious game Android et iPad",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.Serious_Game_Tablette_Android_IPad.2014.T1.2.pdf",
            description: [
                "Outils et normes Java/JEE",
                "Serveurs d’applications JBoss/Tomcat",
                "Web services, JSON",
                "Android, IOS (IPhone, Ipod, IPad), AndroidAnnotations",
                "La méthode agile SCRUM"
            ]},

        {title: "Capico Mobile",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.CAPICO_Android_IPad.2014.T1.2.pdf",
            description: [
                "Outils et normes Java/JEE",
                "Serveurs d’applications JBoss / Tomcat",
                "Web services, JSON",
                "Plateforme Android (google), IOS (IPhone, Ipod, IPad), AndroidAnnotations",
                "La méthode agile SCRUM pour le suivi du projet"
            ]},

        {title: "Gatling Stress Tool",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.Gatling.2014.T1.2.pdf",
            description: [
                "Scala",
                "Akka",
                "Eclipse",
                "Diverses librairies Java"
            ]},

        {title: "Capico HTML5, CSS3, AngularJS",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.CAPICO_HTML5_CSS3.2014.T1.2.pdf",
            description: [
                "Outils et normes Java/JEE",
                "Serveurs d’applications JBoss / Tomcat",
                "Web services",
                "Plateforme Android, Ipad, Surface",
                "La méthode agile SCRUM pour le suivi du projet"
            ]},

        {title: "Cloud computing",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.JEE.Capico_CloudComputing.2014.T1.2.pdf",
            description: [
                "Serveurs d’applications JBoss / Tomcat",
                "Amazon, AppEngine, Cloud Foundry",
                "Flex, Flash",
                "Spring, Hibernate, Alfresco",
                "La méthode agile SCRUM pour le suivi du projet"
            ]},

        {title: "Capico JavaEE",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.JEE.Capico.2014.T1.2.pdf",
            description: [
                "Outils et normes Java/JEE",
                "Serveurs d’applications JBoss / Tomcat",
                "Web services",
                "Flex",
                "Format Open Document",
                "La méthode agile SCRUM pour le suivi du projet"
            ]},

        {title: "Interface papier/crayon",
            pdf: "http://www.ebusinessinformation.fr/img/stages2014/REC.StageG3.JEE.Capico_Interfacage_Papier_Crayon.2014.T1.2.pdf",
            description: [
                "Outils et normes Java/JEE",
                "Serveurs d’applications JBoss / Tomcat",
                "Web services",
                "Flex",
                "Format Open Document",
                "La méthode agile SCRUM pour le suivi du projet",
                "Connaissance en traitement d’images est un plus"
            ]},
    ];

}

function Timeline($scope) {

}