import {resources} from "../resources";

export default {
  title: 'Natural Language Processing 3',
  episode: 20,
  date: "2017-07-23",
  guid: "556b3779a8f8546de9457002a19e63b2",
  file: {},
  libsynEpisode: 5566766,
  resources: [
    resources.speech_and_nlp,
    resources.stanford_nlp,
    resources.nltk,
  ],
  teaser: 'Natural Language Processing classical/shallow algorithms.',
  body:`
- Parsing
  - Constituents
  - Grammar: Context Free Grammars (CFGs), Probabalistic CFGs (PCFGs), Cocke–Younger–Kasami (CYK)
  - Dependency Tree: Greedy transition-based parsing (stack/buffer)
  - SyntaxNet (English = Parsey McParseface)
- Relationship Extraction
- Question Answering / Textual Entailment (TF-IDF+Cosine Similarity; Parsing; NER)
- Automatic summarization (TF-IDF; TextRank)
- Machine Translation ([details here](https://www.youtube.com/watch?v=QuELiw8tbx8&list=PL3FW7Lu3i5Jsnh1rnUwq_TcylNr7EkRe6&index=9))`
}