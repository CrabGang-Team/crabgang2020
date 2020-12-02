<?php

namespace App\Repository;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;


class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function getPostsByAuthor(User $user) {
        return $this->createQueryBuilder('p')
            ->where('p.user = :user')
            ->orderBy('p.createdAt', 'DESC')
            ->setParameter("user", $user)
            ->getQuery()
            ->getResult();
        ;
    }

    public function getAllPosts() {
        return $this->createQueryBuilder('p')
            ->orderBy('p.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
        ;
    }

    public function getLastThreePosts() {
        return $this->createQueryBuilder('p')
            ->orderBy('p.createdAt', 'DESC')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
        ;
    }

    public function getLastThreeExceptCurrent(Post $current) {
        return $this->createQueryBuilder('p')
            ->where('p.id <> :current')
            ->orderBy('p.createdAt', 'DESC')
            ->setParameter("current", $current)
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
        ;
    }
}
