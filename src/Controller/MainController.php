<?php

namespace App\Controller;

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
     * @Route("/articles", name="articles")
     */
    public function articles(): Response
    {
        return $this->render('main/articles.html.twig');
    }





}
