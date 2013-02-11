'use strict';

/* Controllers */


function Links($scope){

	$scope.redirect = function(url) {
		window.open (url);
	}

}

function Internships($scope){
	$scope.download = function(url){
		window.open (url);
	}

	$scope.internships = [

		{title : "Serious game Android et iPad",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.androidios.pdf",
		description : [
			 "Outils et normes Java/JEE",
             "Serveurs d’applications JBoss/Tomcat",
             "Web services, JSON",
             "Android, IOS (IPhone, Ipod, IPad), AndroidAnnotations",
             "La méthode agile SCRUM"
		]},

		{title : "Capico Mobile",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.capicomobile.pdf",
		description : [
			 "Outils et normes Java/JEE",
             "Serveurs d’applications JBoss / Tomcat", 
			 "Web services, JSON",
             "Plateforme Android (google), IOS (IPhone, Ipod, IPad), AndroidAnnotations",
             "La méthode agile SCRUM pour le suivi du projet"
		]},

		{title : "Gatling Stress Tool",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.gatlingscalajee.pdf",
		description : [
			"Scala",
			"Akka",
			"Eclipse",
			"Diverses librairies Java"
		]},

		{title : "Intelligence économique",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.intellecoreseauxsociaux.pdf",
		description : [
			"Outils et normes Java/JEE",
			"Serveurs d’applications JBoss / Tomcat",
			"Frameworks Spring, Hibernate, JUnit, Webservice",
			"Mysql",
			"Map reduce comme Hadoop",
			"La méthode agile SCRUM pour le suivi du projet"
		]},

		{title : "Cloud computing",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.capicocloud.pdf",
		description : [
			"Serveurs d’applications JBoss / Tomcat",
			"Amazon, AppEngine, Cloud Foundry",
			"Flex, Flash",
  			"Spring, Hibernate, Alfresco",
  			"La méthode agile SCRUM pour le suivi du projet"
		]},

		{title : "Capico JavaEE",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.capicojee.pdf",
		description : [
			"Outils et normes Java/JEE",
			"Serveurs d’applications JBoss / Tomcat",
			"Web services",
			"Flex",
			"Format Open Document",
			"La méthode agile SCRUM pour le suivi du projet"
		]},

		{title : "Interface papier/crayon",
		pdf : "http://www.ebusinessinformation.fr/images/stories/ebi/Stages2013/ebi.stages2013.capicopapiercrayon.pdf",
		description : [
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