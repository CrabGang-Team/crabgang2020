<?php

namespace App\Controller;

use App\Entity\Post;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        return $this->render('main/home.html.twig');
    }

    /**
     * @Route("/write", name="write_article", methods={"GET"})
     * Cette route est protégée par le fichier config/package/security.yaml
     * Il faut au minimum avoir le role ROLE_USER pour y accéder
     * Si on essaye d'y accéder dans être connecté, symfony nous redirige automatiquement vers la page de login
     */
    public function write()
    {
        
        return $this->render('main/write.html.twig');
    }

    /**
     * @Route("/write", name="write_article_post", methods={"POST"})
     * Cette route est protégée par le fichier config/package/security.yaml
     * Il faut au minimum avoir le role ROLE_USER pour y accéder
     * Si on essaye d'y accéder dans être connecté, symfony nous redirige automatiquement vers la page de login
     */
    public function writePost(Request $request)
    {
        $submittedToken = $request->request->get('token');

        if ($this->isCsrfTokenValid('post-article', $submittedToken)) {

            $entityManager = $this->getDoctrine()->getManager();
            $params = $request->request->all();
            $user = $this->getUser();
            
            $post = new Post();
            $post->setTitle($params["title"])
                ->setContent($params["content"])
                ->setCreatedAt(new DateTime())
                ->setUser($user);

            $user->addPost($post);
            $entityManager->flush();

            return $this->redirectToRoute('write_article');
        } else {
            return $this->redirectToRoute('write_article', [
                "error" => "csrf-token"
            ]);
        }

        
    }

}
