import React from "react";
// import Figure from "./Figure";
import MainImage from "./MainImage";
// import ReactPlayer from "react-player";
// import InstagramEmbed from "react-instagram-embed";
// import LatexRenderer from "./Latex";
// import getYouTubeId from "get-youtube-id"
// import YouTube from "react-youtube"
// import CustomAudioPlayer from "./CustomAudioPlayer"
import ImageWithAddons from "./ImageWithAddons";
// import List from "./list";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import BlockContent from "@sanity/block-content-to-react"

// const overrides = {
//   blockquote: props => {
//     console.log("blockquote", props)
//     return (
//       <div className="px-11 py-16 text-2xl-2 my-20 text-blueNew-custom bg-blueNew-lighter rounded-lg">
//         <span className="mt-0" {...props} />
//       </div>
//     )
//   },
// }

const LargeQuotedText = ({ node }) => {
  return (
    <div className="px-11 py-16 text-2xl-2 my-20 text-blueNew-custom bg-blueNew-lighter rounded-lg">
      <span className="mt-0">“{node.quoted_text}”</span>
    </div>
  );
};

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span key={node._key}>{node.author.name}</span>;
  }
  return <></>;
};

// const list_component = (props) => {
//   console.log(props, "sad");
//   return (
//     <div>
//       <ul>
//         <li>
//           {}:<span></span>
//         </li>
//       </ul>
//     </div>
//   );
// };

const serializers = {
  // listItem: (props) => <List>{props}</List>,
  types: {
    // block: props =>
    //   // Check if we have an override for the “style”
    //   overrides[props.node.style]
    //     ? // if so, call the function and pass in the children, ignoring
    //       // the other unnecessary props
    //       overrides[props.node.style]({ children: props.children })
    //     : // otherwise, fallback to the provided default with all props
    //       BlockContent.defaultSerializers.types.block(props),
    large_quoted_text: LargeQuotedText,
    authorReference: AuthorReference,
    mainImage: ({ node }) => <MainImage mainImage={node} />,

    image_with_addons: ({ node }) => <ImageWithAddons data={node} />,

    code: (props) => (
      <SyntaxHighlighter
        language={props.node.language}
        customStyle={{
          fontSize: 14,
          marginTop: 0,
          marginBottom: 16,
        }}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
    // videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
    // instagram: ({ node }) => {
    //   if (!node.url) return null;
    //   return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    // },
    // math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
  },
  marks: {
    internalLink: ({ children, mark }) => (
      <a style={{ color: "red" }} href={mark.slug.current}>
        {children}
      </a>
    ),
    link: ({ children, mark }) => {
      // console.log(children, mark, "block contain")
      //added by Hari on 2021-04-30
      return (
        <a
          className="underline text-purpleNew-gigas hover:text-blueNew-midnight"
          href={mark.href}
        >
          {children}
        </a>
      );
    },
  },
};

export default serializers;
