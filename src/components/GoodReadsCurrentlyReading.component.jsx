import React from "react";

const html = `
        <!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <style type="text/css" media="screen">
  .gr_custom_container_1739507486 {
    /* customize your Goodreads widget container here*/
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: #FFFFFF;
    color: #000000;
    
  }
  .gr_custom_header_1739507486 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 150%
  }
  .gr_custom_each_container_1739507486 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1739507486 {
    /* customize your book covers here */
    overflow: hidden;
    height: 160px;
      float: left;
      margin-right: 4px;
      width: 98px;
  }
  .gr_custom_author_1739507486 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1739507486 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1739507486 {
    /* customize your rating stars here */
    float: right;
  }
</style>

      <div id="gr_custom_widget_1739507486">
          <div class="gr_custom_container_1739507486">
    <h2 class="gr_custom_header_1739507486">
    <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/21277948-dakshraj-sharma?shelf=currently-reading&amp;utm_medium=api&amp;utm_source=custom_widget">Currently Reading</a>
    </h2>
      <div class="gr_custom_each_container_1739507486">
          <div class="gr_custom_book_container_1739507486">
            <a title="Anna Karenina" rel="nofollow" href="https://www.goodreads.com/review/show/2923290514?utm_medium=api&amp;utm_source=custom_widget"><img alt="Anna Karenina" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1426930853l/153._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1739507486">
            <span class=" staticStars notranslate"><img src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1739507486">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2923290514?utm_medium=api&amp;utm_source=custom_widget">Anna Karenina</a>
          </div>
          <div class="gr_custom_author_1739507486">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/128382.Leo_Tolstoy">Leo Tolstoy</a>
          </div>
          <div class="gr_custom_tags_1739507486">
            tagged:
            currently-reading
          </div>
      </div>
      <div class="gr_custom_each_container_1739507486">
          <div class="gr_custom_book_container_1739507486">
            <a title="Meditations" rel="nofollow" href="https://www.goodreads.com/review/show/2923290911?utm_medium=api&amp;utm_source=custom_widget"><img alt="Meditations" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421618636l/30659._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1739507486">
            <span class=" staticStars notranslate"><img src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1739507486">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2923290911?utm_medium=api&amp;utm_source=custom_widget">Meditations</a>
          </div>
          <div class="gr_custom_author_1739507486">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/17212.Marcus_Aurelius">Marcus Aurelius</a>
          </div>
          <div class="gr_custom_review_1739507486">
            
          </div>
          <div class="gr_custom_tags_1739507486">
            tagged:
            stoicism, philosophy, self-help, and currently-reading
          </div>
      </div>
      <div class="gr_custom_each_container_1739507486">
          <div class="gr_custom_book_container_1739507486">
            <a title="The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living" rel="nofollow" href="https://www.goodreads.com/review/show/5403427104?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462161080l/29093292._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1739507486">
            <span class=" staticStars notranslate"><img src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1739507486">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/5403427104?utm_medium=api&amp;utm_source=custom_widget">The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living</a>
          </div>
          <div class="gr_custom_author_1739507486">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/5775580.Ryan_Holiday">Ryan Holiday</a>
          </div>
          <div class="gr_custom_tags_1739507486">
            tagged:
            currently-reading
          </div>
      </div>
      <div class="gr_custom_each_container_1739507486">
          <div class="gr_custom_book_container_1739507486">
            <a title="The Myth of Sisyphus" rel="nofollow" href="https://www.goodreads.com/review/show/7267652518?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Myth of Sisyphus" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526931180l/39947376._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1739507486">
            <span class=" staticStars notranslate"><img src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1739507486">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/7267652518?utm_medium=api&amp;utm_source=custom_widget">The Myth of Sisyphus</a>
          </div>
          <div class="gr_custom_author_1739507486">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/957894.Albert_Camus">Albert Camus</a>
          </div>
          <div class="gr_custom_tags_1739507486">
            tagged:
            currently-reading
          </div>
      </div>
      <div class="gr_custom_each_container_1739507486">
          <div class="gr_custom_book_container_1739507486">
            <a title="Figuring" rel="nofollow" href="https://www.goodreads.com/review/show/7308249942?utm_medium=api&amp;utm_source=custom_widget"><img alt="Figuring" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541193905l/40277347._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1739507486">
            <span class=" staticStars notranslate"><img src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1739507486">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/7308249942?utm_medium=api&amp;utm_source=custom_widget">Figuring</a>
          </div>
          <div class="gr_custom_author_1739507486">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/5186085.Maria_Popova">Maria Popova</a>
          </div>
          <div class="gr_custom_review_1739507486">
            
          </div>
          <div class="gr_custom_tags_1739507486">
            tagged:
            currently-reading
          </div>
      </div>
  <br style="clear: both"/>
  <center>
    <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://s.gr-assets.com/images/widget/widget_logo.gif" /></a>
  </center>
  <noscript>
    Share <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a> and ratings with Dakshraj, and even join a <a rel="nofollow" href="https://www.goodreads.com/group">book club</a> on Goodreads.
  </noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/custom_widget/21277948.Currently%20Reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1739507486&widget_text_color=000000&widget_title_size=large&widget_width=full" type="text/javascript" charset="utf-8"></script>
`

const GoodReadsCurrentlyReading = () => {
  return <div dangerouslySetInnerHTML={{__html: html}}></div>  
}

export default GoodReadsCurrentlyReading;