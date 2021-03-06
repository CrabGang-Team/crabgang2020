<?php

namespace App\Controller;

use DateTime;
use App\Entity\Post;
use App\Entity\Report;
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
        $lastPosts = $this->getDoctrine()->getRepository(Post::class)->getLastThreePosts();
        return $this->render('main/home.html.twig', [
            "lastPosts" => $lastPosts
        ]);
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

    /**
     * @Route("/posts/{post}", name="post")
     */
    public function post(Post $post)
    {
        $lastPosts = $this->getDoctrine()->getRepository(Post::class)->getLastThreeExceptCurrent($post);
        return $this->render('main/post-full.html.twig', [
            "post" => $post,
            "lastPosts" => $lastPosts
        ]);
    }

    /**
     * @Route("/posts", name="posts")
     */
    public function posts()
    {
        $posts = $this->getDoctrine()->getRepository(Post::class)->getAllPosts();
        return $this->render('main/posts.html.twig', [
            "posts" => $posts
        ]);
    }

    /**

     * @Route("/report/new", name="reports")
     */
    public function reports()
    {
        return $this->render('main/write_reports.html.twig');
    }

    /**
     * @Route("/report/new/post", name="reports_post", methods={"POST"})
     */
    public function reportsPost(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $params = $request->request->all();
        
        $report = new Report();
        $report->setNom($params["name"])
            ->setPrenom($params["firstname"])
            ->setLieu($params["place"])
            ->setTempAir($params["tempAir"])
            ->setTempEau($params["tempWater"])
            ->setPollution($params["pollution"])
            ->setDate(new DateTime($params["date"]));

        $entityManager->persist($report);
        $entityManager->flush();

        return $this->redirectToRoute('reports');
        
    }

    /**
     * @Route("/reports", name="reports_list")
     */
    public function reportsList()
    {
        $reports = $this->getDoctrine()->getRepository(Report::class)->getAllReposts();
        return $this->render('main/reposts.html.twig', [
            "reports" => $reports
        ]);
    }
    /**
     * @Route("/amongusstart", name="amongusstart")
     */
    public function amongusstart()
    {
        $lastPosts = $this->getDoctrine()->getRepository(Post::class)->getLastThreePosts();
        return $this->render('main/amongusstart.html.twig', [
            "lastPosts" => $lastPosts

        ]);
    }

    /**

     * @Route("/report/{report}", name="report")
     */
    public function report(Report $report)
    {
        return $this->render('main/repost-full.html.twig', [
            "report" => $report
        ]);
    }


    /**
     * @Route("/amongus", name="amongus")
     */
    public function amongus()
    {
        $lastPosts = $this->getDoctrine()->getRepository(Post::class)->getLastThreePosts();
        return $this->render('main/amongus.html.twig', [
            "lastPosts" => $lastPosts
        ]);
    }


    /**
     * @Route("/amongUs/emergency", name="emergency_meeting")
     */
    public function Emergency(): Response
    {
        //$lastPosts = $this->getDoctrine()->getRepository(Post::class)->getLastThreePosts();
        return $this->render('amongus/emergency.html.twig', [
            //"lastPosts" => $lastPosts
        ]);
    }

    /**
     * @Route("/amongUs/antoinedied", name="antoinedied")
     */
    public function Antoinedied(): Response
    {
        return $this->render('amongus/antoinedied.html.twig');
    }

    /**
     * @Route("/amongUs/alfreddied", name="alfreddied")
     */
    public function Alfreddied(): Response
    {
        return $this->render('amongus/alfreddied.html.twig');
    }    

    /**
     * @Route("/amongUs/robindied", name="robindied")
     */
    public function Robindied(): Response
    {
        return $this->render('amongus/robindied.html.twig');
    }    

}
