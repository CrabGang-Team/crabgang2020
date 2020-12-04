<?php

namespace App\Entity;

use App\Repository\ReportRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReportRepository::class)
 */
class Report
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $lieu;

    /**
     * @ORM\Column(type="integer")
     */
    private $tempAir;

    /**
     * @ORM\Column(type="integer")
     */
    private $tempEau;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $pollution;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(string $lieu): self
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getTempAir(): ?int
    {
        return $this->tempAir;
    }

    public function setTempAir(int $tempAir): self
    {
        $this->tempAir = $tempAir;

        return $this;
    }

    public function getTempEau(): ?int
    {
        return $this->tempEau;
    }

    public function setTempEau(int $tempEau): self
    {
        $this->tempEau = $tempEau;

        return $this;
    }

    public function getPollution(): ?string
    {
        return $this->pollution;
    }

    public function setPollution(string $pollution): self
    {
        $this->pollution = $pollution;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
