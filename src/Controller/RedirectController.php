<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class RedirectController extends AbstractController
{
    /**
     * @Route("/", name="redirectToHome")
     */
    public function redirectToHome()
    {
        return $this->redirectToRoute('home');
    }

    public function redirectToLocale(): Response
    {
        return $this->redirectToRoute('home');
    }


}
