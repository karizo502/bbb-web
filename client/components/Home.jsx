import React, { Component } from 'react'
import NavBar from "Components/NavBar"
import styles from 'Components/css/timeline.css'

export default class extends Component {

  render() {
    return (<div>
    <NavBar />
    <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="card is-fullwidth">
            <header class="card-header">
            </header>
            <div class="card-content">
              <a class="card-avatar">
                <img src="https://pbs.twimg.com/profile_images/3005141692/dc8e1eb36b6cbd2b5726f63c50adf7f2.png" class="card-avatar-img" />
              </a>

              <div class="card-user">
                <div class="card-user-name">
                  <a href="#">John Smith</a>
                </div>
                <span>
                  <a href="#">@<span>jsmith</span></a>
                </span>
              </div>

              <div class="card-stats">
                <ul class="card-stats-list">
                  <li class="card-stats-item">
                    <a href="#" title="9.840 Tweet">
                      <span class="card-stats-key">Tweets</span>
                      <span class="card-stats-val">1</span>
                    </a>
                  </li>
                  <li class="card-stats-item">
                    <a href="#/following" title="885 Following">
                      <span class="card-stats-key">Following</span>
                      <span class="card-stats-val">0</span>
                    </a>
                  </li>
                  <li class="card-stats-item">
                    <a href="#">
                      <span class="card-stats-key">Followers</span>
                      <span class="card-stats-val">0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="box trending">
            <p class="trend-title"><span class="title is-5">Trends</span> · <a href="#">change</a></p>
            <p class="trend-hashtag"><a href="#">#hashtag1</a><br />13k statuses</p>
            <p class="trend-hashtag"><a href="#">#hashtag2</a><br />29k statuses</p>
            <p class="trend-hashtag"><a href="#">#hashtag3</a><br />2k statuses</p>
            <p class="trend-hashtag"><a href="#">#hashtag4</a><br />9k statuses</p>
            <p class="trend-hashtag"><a href="#">#hashtag5</a><br />18k statuses</p>
            <p class="trend-hashtag"><a href="#">#hashtag6</a><br />168k statuses</p>
          </div>
        </div>
        <div class="column is-6">
          <div class="notification is-danger">
            <button class="delete" onclick="((this).parentNode.remove())"></button>
            This template is not yet finished, it may change. Please check the readme for more information.
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="http://placehold.it/128x128" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
        <div class="column is-3">
          <div class="box">
            <p><span class="title is-5">Who to follow</span> · <a href="#">Refresh</a> · <a href="#">View All</a></p>
            <hr />
            <div class="columns">
              <div class="column is-3 is-marginless">
                <div class="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div class="column is-9">
                <p>
                  <a href="#">
                    <strong>John Smith</strong>
                    @jsmith
                  </a> 
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </p>
                <a class="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-3 is-marginless">
                <div class="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div class="column is-9">
                <p>
                  <a href="#">
                    <strong>Jane Smith</strong>
                    @janesmith
                  </a> 
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </p>
                <a class="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-3 is-marginless">
                <div class="image">
                  <img src="https://placehold.it/200x200" />
                </div>
              </div>
              <div class="column is-9">
                <p>
                  <a href="#">
                    <strong>Mike Scott</strong>
                    @mscott
                  </a> 
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </p>
                <a class="button is-primary is-small">
                  <span>
                    + Follow
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  </div> )
  }

  
}