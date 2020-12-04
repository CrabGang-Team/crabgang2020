<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpClient\HttpClient;

class RestController extends AbstractController
{
    /**
     * @Route("/rest/pollution/get/{routeName}", name="rest")
     */
    public function index(String $routeName): Response
    {

        //get time stamp before 
        $curTime = microtime(true);

        $url = "http://51.210.122.194".$this->generateUrl($routeName);

        // make request
        $client = HttpClient::create();
        $requestResponse = $client->request('GET', $url);
        $requestResponse->getContent();
        //get time stamp after
        $timeConsumed = round(microtime(true) - $curTime,3)*1000;  

        //return json diff timestamp
        $response = new Response(json_encode(array('loadingTime' => $timeConsumed)));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
