import { Single_Issue_Html } from "../Html_Templates/CurrentIssue_SingleIssue";
import { articles } from "../Utils/Data";
import {
  applyPlaceholder,
  insertInnerHtml,
  selectElement,
} from "../Utils/General_Utils";
import {
  WebServer,
  FileServer,
  Selectors,
  Placeholders,
} from "../Utils/Selectors_And_PlaceHolders";

const currentIssuesPlaceholders = Placeholders.Current_Issue;
const currentIssuesSelectors = Selectors.Current_Issue;
const currentIssue = "Volume 3 No. 2";
const currentArtilces = articles.filter((el) => el.volume_name == currentIssue);
const currentArticlesHtml = currentArtilces
  .map((el) => {
    let tempCurrentArticle = Single_Issue_Html;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_name,
      el.article_name
    );
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_authors,
      el.authors.join(", ")
    );
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_pages,
      "N/A"
    );
    const articlePath = FileServer + el.file_name;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_href,
      articlePath
    );

    const articleSuffixLink = `Single%20Article.html?site-=nla&articleId=${el.id}`;
    const articleLink = WebServer + articleSuffixLink;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_name_href,
      articleLink
    );
    return tempCurrentArticle;
  })
  .join(" ");

const publishDate = currentArtilces[0].publish_date;
const publishedHtml = `
  <strong> Published: </strong>
                            ${publishDate}`;
insertInnerHtml(currentIssuesSelectors.Container, currentArticlesHtml);
insertInnerHtml(currentIssuesSelectors.Main_Publish_Date, publishedHtml);
