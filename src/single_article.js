import { Placeholders, Selectors } from "../Utils/Selectors_And_PlaceHolders";
import { applyPlaceholder, insertInnerHtml } from "../Utils/General_Utils";
import { Single_Article, Single_Article_HTML } from "../Utils/Mock_Data";
import { single_article_base_html } from "../Html_Templates/Single_Article_Base_Html";

const inject_page = () => {
  let temp_single_article_page = applyPlaceholder(
    single_article_base_html,
    Placeholders.Single_Article.article_doi_link_href,
    Single_Article.article_doi_link_href
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_doi_link_text,
    Single_Article.article_doi_link_text
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_downloads_count,
    Single_Article.article_downloads_count
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_main_author,
    Single_Article.article_main_author
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_other_authors,
    Single_Article.article_other_authors
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_title_large,
    Single_Article.article_title_large
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_views_count,
    Single_Article.article_views_count
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.volume_year,
    Single_Article.volume_year
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.volume_label,
    Single_Article.volume_label
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.dates.accepted,
    Single_Article.dates.accepted
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.dates.published,
    Single_Article.dates.published
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.dates.received,
    Single_Article.dates.received
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.dates.revised,
    Single_Article.dates.revised
  );

  insertInnerHtml("body", temp_single_article_page);
};

const inject_article_content = () => {
  insertInnerHtml(Selectors.Single_Article.text_container, Single_Article_HTML);
};

inject_page();
inject_article_content();
// selectElement(Selectors.NLA_Enugu_State_Chapter_bread_crumbs_Button).href =
//   Routes.Homepage;
