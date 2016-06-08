angular.module('ebizApp')
    .directive('news', [news]);

function news() {
  return {
    restrict: 'E',
    templateUrl: 'partials/news.html',
    scope: {},
    link: function(scope, element, attrs) {

      //-------------------------------------------------//
      //--------------- Scope variables -----------------//
      //-------------------------------------------------//

      scope.newsList = [
        {
          anchor: 'vivatech',
          title: 'Viva Technology',
          author: 'eBusiness Information',
          content: 'eBiz participera au salon Viva Technology pour présenter Jawg maps dans le contexte d\'usage de Transilien et plus particulièrement la gestion outdoor et indoor multi étages des 383 gares parisiennes. Rendez-vous à partir du 30 juin dans l\'espace Open Transportation, stand Jawg maps',
          image: 'img/news/vivatech.jpg',
          date:'08/06/2016',
          partnerLink:'http://www.vivatechnologyparis.com/'
        },
        {
          anchor: 'liferay',
          title: 'Liferay Symposium',
          author: 'eBusiness Information',
          content: 'Le Liferay Symposium 2016 du 30 mai et du 1er juin 2016 propose à tous les experts et passionnés de Liferay de se rencontrer et de promouvoir des technologies utiles à cet écosystème. Cette année, Liferay et Altendis ont permis que deux des bébés d\'eBiz, Gatling et Jawg soient présentés lors des conférences techniques : le module Jawg pour Liferay 7.0 et comment utiliser Gatling Frontline pour stresser un portail Liferay.',
          image: 'img/news/liferay.png',
          date:'02/06/2016',
          partnerLink:'https://web.liferay.com/fr/web/events2016/france/home'
        },
        {
          anchor: 'sotm',
          title: 'State Of The Map',
          author: 'eBusiness Information',
          content: 'Aujourd\'hui, François et Loic étaient au State Of The Map France qui se tient à Clermont-Ferrand pour parler OpenStreetMap avec la communauté, présenter la suite de OSM Contributor et le retour d\'expérience indoor de Transilien avec Jawg maps. Saurez-vous les retrouver sur la photo de groupe',
          image: 'img/news/sotm.png',
          date:'21/05/2016',
          partnerLink:'https://twitter.com/OSM_FR/status/733610667584978944'
        },
        {
          anchor: 'pariscarto',
          title: 'Paris Cartographie Meetup',
          author: 'eBusiness Information',
          content: 'Le Paris Cartographie Meetup, vous connaissez ? Loic, et une bonne partie de l\'équipe Jawg maps y sera ce soir pour parler cartes et openstreetmap avec de vrais passionnés !',
          image: '',
          date:'18/05/2016',
          partnerLink:'http://www.meetup.com/fr-FR/Paris-Cartographie-Meetup/events/230821073/?eventId=230821073'
        },
        {
          anchor: 'jawgmaps',
          title: 'jawg maps',
          author: 'eBusiness Information',
          content: 'Après des recherches nombreuses, nous avons trouvé un super nom pour notre solution de serveurs de cartes : jawg maps. Le contrôle de vos cartes web, intranet ou mobiles enfin à votre portée',
          image: 'img/news/jawg-logo.png',
          date:'14/05/2016',
          partnerLink:'https://jawg.io'
        },
        {
          anchor: 'mapsquare',
          title: 'mapsquare or not mapsquare ?',
          author: 'eBusiness Information',
          content: 'Trouver un nom cool pour un produit n\'est pas chose aisée... le domaine en .fr, .com ou .io doit être disponible, les noms de domaines proches ne doivent pas être exploités par des produits similaires et enfin, il faut penser à l\'avenir : la marque sera t\'elle protégeable pour les activités qui vous intéressent ? Quelques recherches sur la BD de l\'INPI ou de l\'OMPI permettent de voir à quel point il est difficile d\'être vraiment original dans les métiers tech !',
          image: 'img/news/mapsquare-logo.png',
          date:'10/05/2016',
          partnerLink:''
        }
      ];

      //-------------------------------------------------//
      //------------------- Function --------------------//
      //-------------------------------------------------//



      //-------------------------------------------------//
      //--------------------- Init ----------------------//
      //-------------------------------------------------//

    }
  };
}