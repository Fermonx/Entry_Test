<?php

namespace AppBundle\Entity;

/**
 * Class Article
 */
class Article
{
    private $id;

    private $name;

    private $description;

    private $img;

    /**
     * Article constructor.
     *
     * @param $id
     * @param $name
     * @param $img
     */
    public function __construct($id, $name, $img)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
        $this->img = $img;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getImg()
    {
        return $this->img;
    }
}