import React, { useEffect } from 'react'
import '../Style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
// import { motion } from "framer-motion"

import * as motion from "framer-motion/client"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";



const Header = () => {


  return (
    <div class="body">
        <div class='nk-wrap'>
        <header class="nk-header page-header is-light is-transparent is-sticky is-shrink" id="header">
            <div class="header-main">
                <div class="header-container container container-xxl">
                    <div class="header-wrap">
                        <div class="header-logo logo animated" data-animate="fadeInDown" data-delay=".65">
                            <a  href="https://ai.debugshala.com/" class="logo-link" target="_blank">
                                <img class="logo-dark" src="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.svg" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.svg" alt="logo"/>
                                <img class="logo-light" src="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.svg" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.svg" alt="logo"/>
                            </a>
                        </div>
                        <div class="header-nav-toggle">
                            <a href="#" class="navbar-toggle" data-menu-toggle="header-menu">
                                <div class="toggle-line">
                                    <span></span>
                                </div>
                            </a>
                        </div>
                        <div class="header-navbar header-navbar-s2 flex-grow-1">
                            <nav class="header-menu" id="header-menu">
                                <ul class="menu mx-auto animated" data-animate="fadeInDown" data-delay=".75">
                                   <li class="menu-item has-sub">
                                        <div class="menu-sub menu-drop menu-mega menu-mega-3clmn">
                                            <div class="menu-mega-innr">
                                                <ul class="menu-mega-list">
                                                    <li class="menu-item"><a href="index-azalea.html">Azalea Dark<span class="badge badge-xs badge-light">v1.6</span></a></li>
                                                    <li class="menu-item"><a href="index-azalea-multi.html">Azalea Multi<span class="badge badge-xs badge-light">v1.6</span></a></li>
                                                    <li class="menu-item"><a href="index-gentian.html">Gentian Dark<span class="badge badge-xs badge-light">v1.5</span></a></li>
                                                    <li class="menu-item"><a href="index-gentian-pro.html">Gentian Pro<span class="badge badge-xs badge-light">v1.5</span></a></li>
                                                    <li class="menu-item"><a href="index-gentian-multi.html">Gentian Multi<span class="badge badge-xs badge-light">v1.5</span></a></li>
                                                    <li class="menu-item"><a href="index-zinnia.html">Zinnia Pro</a></li>
                                                    <li class="menu-item"><a href="index-salvia.html">Salvia Pro</a></li>
                                                    <li class="menu-item"><a href="index-lungwort.html">Lungwort Dark</a></li>
                                                </ul>
                                                <ul class="menu-mega-list">
                                                    <li class="menu-item"><a href="index-jasmine.html">Jasmine Light</a></li>
                                                    <li class="menu-item"><a href="index-lobelia.html">Lobalia Dark</a></li>
                                                    <li class="menu-item"><a href="index-muscari.html">Muscari Pro</a></li>
                                                    <li class="menu-item"><a href="index-lavender.html">Lavender Pro</a></li>
                                                    <li class="menu-item"><a href="index-azure-pro.html">Azure Pro</a></li>
                                                    <li class="menu-item"><a href="index-azure.html">Azure Dark</a></li>
                                                    <li class="menu-item"><a href="index-dark-pro.html">Default Dark Pro</a></li>
                                                    <li class="menu-item"><a href="index-light.html">Default Light</a></li>
                                                </ul>
                                                <ul class="menu-mega-list">
                                                    <li class="menu-item"><a href="index-dark.html">Default Dark</a></li>
                                                    <li class="menu-item"><a href="index-linum-wallet.html">Linum Wallet<span class="badge badge-xs badge-light">v1.8</span></a></li>
                                                    <li class="menu-item"><a href="index-flax-wallet.html">Flax Wallet<span class="badge badge-xs badge-light">v1.8</span></a></li>
                                                    <li class="menu-item"><a href="index-crocus-multi.html">Crocus Multi<span class="badge badge-xs badge-light">v1.9</span></a></li>
                                                    <li class="menu-item"><a href="index-cyanus-multi.html">Cyanus Multi</a></li>
                                                    <li class="menu-item"><a href="index-blockchain.html">Blockchain <span class="badge badge-xs badge-new">new</span></a></li>
                                                    <li class="menu-item"><a href="index-nft-portfolio.html">NFT Portfolio <span class="badge badge-xs badge-new">new</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li> 
                                    <li class="menu-item"><a class="menu-link nav-link" href="#learnWithYukti">Learn with युkti</a></li>
                                    <li class="menu-item"><a class="menu-link nav-link" href="#chatWithYukti">Chat with युkti</a></li>
                                    <li class="menu-item"><a class="menu-link nav-link" href="#codeWithYukti">Code with युkti</a></li>
                                </ul>
                                <ul class="menu-btns animated" data-animate="fadeInDown" data-delay=".85">
                                 <li><a href="https://ai.debugshala.com/signup" class="btn btn-md btn-auto btn-outline btn-dark no-change btn-round btn-nocap" target="_blank"><span>Connect with युkti </span></a></li>
                               
                             </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
<div class="header-banner bg-white has-ovm">
                <div class="nk-banner">
                    <div class="banner banner-fs banner-single">
                        <div class="py-4 py-sm-5 w-100">
                            <div class="nk-block nk-block-sm">
                                <div class="container container-xxl">
                                    <div class="row justify-content-between align-items-center flex-row-reverse">
                                        <div class="col-lg-5 pb-5 pb-lg-0">
                                            <div class="banner-gfx banner-gfx-re-s6 animated" data-animate="fadeInUp" data-delay="1.25">
                                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/headerimg.png" alt="header"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="banner-caption">
                                                <div class="cpn-text mb-4 mt-0">
                                                    <h6 class="subtitle text-primary animated" data-animate="fadeInUp" data-delay="1.35" className='namase'>नमस्कार 🙏🏻</h6>
                                                    <h1 class="title title-semibold animated" data-animate="fadeInUp" data-delay="1.45">Start With युkti - Career</h1>
                                                    <h1 class="title title-semibold animated" data-animate="fadeInUp" data-delay="1.45" className='tension'>Tension se मुkti</h1>

                                                    <p class="lead animated" data-animate="fadeInUp" data-delay="1.55">Elevate Your Career Journey with युkti: AI Mentorship for Interviews, Programming Mastery, and Multilingual Coding Excellence.</p>
                                                </div>
                                                <div class="d-flex flex-column pt-2">
                                                    <ul class="btn-grp animated" data-animate="fadeInUp" data-delay="1.65">
                                                        <li><a href="https://ai.debugshala.com/login" class="btn btn-md btn-outline btn-dark btn-round btn-nocap" target="_blank"><span>Login Now</span> <em class="ms-3 fas fa-arrow-right"></em></a></li>
                                                    </ul>
                                                    <ul class="btn-grp mt-2 animated" data-animate="fadeInUp" data-delay="1.75">
                                                        <li><a class="link link-light" href="https://www.youtube.com/@debugshala" target="_blank"><em class="link-icon fs-5 far fa-play-circle"></em><span>Get to Know युkti</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nk-block pb-6">
                                <div class="container container-xxl">
                                    <div class="row g-gs">
                                        <div class="col-lg-3 col-mb-6">
                                            <div class="card card-sm animated" data-animate="fadeInUp" data-delay="1.85">
                                                <div class="d-flex flex-mb-column flex-sm-row flex-lg-column flex-xl-row align-items-start justify-content-between">
                                                    <div class="me-3 mb-mb-3 mb-sm-0 mb-lg-2 mb-xl-0">
                                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/icons/1.svg" alt=""/>
                                                    </div>
                                                    <ul class="badge-list">
                                                        <li>
                                                            <span class="badge badge-sm text-bg-success-soft rounded-1">AI Based</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column mt-3">
                                                    <h6 class="title title-sm mb-1">Learn with <span class="fw-5 text-secondary fs-90">युkti</span></h6>
                                                    <span class="fs-6">Unlocking Knowledge</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-mb-6">
                                            <div class="card card-sm animated" data-animate="fadeInUp" data-delay="1.90">
                                                <div class="d-flex flex-mb-column flex-sm-row flex-lg-column flex-xl-row align-items-start justify-content-between">
                                                    <div class="me-3 mb-mb-3 mb-sm-0 mb-lg-2 mb-xl-0">
                                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/icons/2.svg" alt=""/>
                                                    </div>
                                                    <ul class="badge-list">
                                                        <li>
                                                            <span class="badge badge-sm text-bg-success-soft rounded-1">AI Assistant</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column mt-3">
                                                    <h6 class="title title-sm mb-1">Chat with <span class="fw-5 text-secondary fs-90">युkti</span></h6>
                                                    <span class="fs-6">1-to-1 Conversation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-mb-6">
                                            <div class="card card-sm animated" data-animate="fadeInUp" data-delay="1.95">
                                                <div class="d-flex flex-mb-column flex-sm-row flex-lg-column flex-xl-row align-items-start justify-content-between">
                                                    <div class="me-3 mb-mb-3 mb-sm-0 mb-lg-2 mb-xl-0">
                                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/icons/3.svg" alt=""/>
                                                    </div>
                                                    <ul class="badge-list">
                                                        <li>
                                                            <span class="badge badge-sm text-bg-success-soft rounded-1">Bug Free</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column mt-3">
                                                    <h6 class="title title-sm mb-1">Code with <span class="fw-5 text-secondary fs-90">युkti</span></h6>
                                                    <span class="fs-6">Smart Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-mb-6">
                                            <div class="card card-sm animated" data-animate="fadeInUp" data-delay="2">
                                                <div class="d-flex flex-mb-column flex-sm-row flex-lg-column flex-xl-row align-items-start justify-content-between">
                                                    <div class="me-3 mb-mb-3 mb-sm-0 mb-lg-2 mb-xl-0">
                                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/icons/4.svg" alt=""/>
                                                    </div>
                                                    <ul class="badge-list">
                                                        <li>
                                                            <span class="badge badge-sm text-bg-success-soft rounded-1">Job Assistant</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column mt-3">
                                                    <h6 class="title title-sm mb-1">Career with <span class="fw-5 text-secondary fs-90">युkti</span></h6>
                                                    <span class="fs-6">Get Interview Guide</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nk-ovm blur-a"></div>
            </div>
          
        </header>

        </div>
    
    </div>
  )
}

export default Header
