<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpClient\HttpClient;

class RestController extends AbstractController
{
    /**
     * @Route("/rest/polution/get/{url}", name="rest")
     */
    public function index(String $url): Response
    {

        //get time stamp before 
        $curTime = microtime(true);

        // make request
        $client = HttpClient::create();
        $requestResponse = $client->request('GET', urldecode($url));
        $requestResponse->getContent();
        //get time stamp after
        $timeConsumed = round(microtime(true) - $curTime,3)*1000;  

        //return json diff timestamp
        $response = new Response(json_encode(array('loadingTime' => $timeConsumed)));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
