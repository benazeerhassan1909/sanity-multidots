import { defineQuery } from 'next-sanity'

export const HEADER_QUERY = defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]{ 
  siteTitle,
  logo,
  sanityLogo
  }`);
export const FOOTER_QUERY = defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  footer }`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  homePage->{
    ...,
    "seo": {
    "title": coalesce(seo.title, title, ""),
     "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
    content[]{
      ...,
    }      
  }
}`);
export const PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  homePage->{
    ...,
    "seo": {
    "title": coalesce(seo.title, title, ""),
     "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
    content[]{
      ...,
    }      
  }
}`);

export const SITEMAP_QUERY = defineQuery(`
  *[_type in ["page", "post"] && defined(slug.current)] {
      "href": select(
        _type == "page" => "/" + slug.current,
        _type == "post" => "/posts/" + slug.current,
        slug.current
      ),
      _updatedAt
  }
  `)
 
export const POSTS_QUERY = defineQuery(`* [_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  publishedAt,
  mainImage,
  "author": author-> name,image,
    "categories": categories[] -> title
}`)
