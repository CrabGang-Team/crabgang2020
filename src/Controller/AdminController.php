<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @IsGranted("ROLE_ADMIN")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/admin/dashboard", name="admin_dashboard")
     */
    public function dashboard(): Response
    {        
        return $this->render('admin/dashboard.html.twig');
    }

    /**
     * @Route("/admin/users", name="admin_users_list")
     */
    public function usersList(): Response 
    {
        $admins = $this->getDoctrine()->getRepository(User::class)->getUsersByRole("ROLE_ADMIN");
        $users = $this->getDoctrine()->getRepository(User::class)->getUsersByRole("ROLE_USER");

        return $this->render('admin/users.html.twig', [
            "admins" => $admins,
            "users" => $users
        ]);
    }

    /**
     * @Route("/admin/users/{user}", name="admin_user_posts")
     * Ici, le paramètre "user" dans l'url va automatiquement être converti en User
     */
    public function userPosts(User $user): Response 
    {
        $posts = $this->getDoctrine()->getRepository(Post::class)->getPostsByAuthor($user);

        return $this->render('admin/user-posts.html.twig', [
            "posts" => $posts,
            "user" => $user
        ]);
    }

    /**
     * @Route("/admin/users/{user}/delete", name="admin_user_delete")
     * Ici, le paramètre "user" dans l'url va automatiquement être converti en User
     */
    public function userDelete(User $user): Response 
    {
        if($user != $this->getUser()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute("admin_users_list");
    }

    /**
     * @Route("/admin/posts/{post}/delete", name="admin_post_delete")
     * Ici, le paramètre "user" dans l'url va automatiquement être converti en User
     */
    public function postDelete(Post $post): Response 
    {

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($post);
        $entityManager->flush();
        

        return $this->redirectToRoute("admin_user_posts", [
            "user" => $this->getUser()->getId()
        ]);
    }

    /**
     * @Route("/admin/posts", name="admin_posts_list")
     */
    public function postsList(): Response 
    {
        $posts = $this->getDoctrine()->getRepository(Post::class)->getAllPosts();

        return $this->render('admin/posts.html.twig', [
            "posts" => $posts
        ]);
    }

}
