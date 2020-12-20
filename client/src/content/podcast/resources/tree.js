import {resources as r} from './index'

export default {
  main: {
    t: "Main",
    d: "Main learning track - 75% of your learning time",
    pick: "all",
    v: [
      {
        t: "Inspiration (optional)",
        d: "Non-technical machine learning & AI content: introduction to the subject, or inspiration / philosophy",
        pick: "any",
        v: [
          r.society_of_mind
        ]
      },

      {
        t: "Basics",
        d: "Machine learning Basics. Let the games begin!",
        pick: "all",
        v: [
          r.ng,
          r.fastai,
          r.handson_tensorflow,
          {
            hide: "main_basics",
            pick: "any",
            v: [
              r.elements_of_stat_learning,
              r.pattern_rec
            ]
          }
        ]
      }
    ]
  },

  math: {
    t: "Math",
    d: "Math learning track - 25% of your learning time",
    pick: "all",
    v: [
      {
        t: "Linear Algebra",
        pick: "one",
        v: [
          r.fastai_linear_algebra,
          r.book_linear_algebra,
          r.khan_linear_algebra,
        ]
      },
      {
        t: "Calculus",
        pick: "one",
        v: [
          r.book_calc,
          r.khan_calc,
          // TODO brown/blue
        ]
      },
      {
        t: "Statistics & Probability",
        pick: "one",
        v: [
          r.khan_stats,
          r.book_stats
        ]
      }
    ]

  },

  audio: {
    t: "Audio",
    d: "Supplementary audio learning. For driving / chores / exercise",
    pick: "all",
    v: [
      {
        t: "Inspiration (optional)",
        d: "Non-technical machine learning & AI content: introduction to the subject, or inspiration / philosophy",
        pick: "any",
        v: [
          r.master_algorithm,
          r.singularity_is_near,
          r.tgc_consciousness,
          r.superintelligence,
          r.machines_of_loving_grace,
          r.feeling_of_life,
        ],
      },

      {
        t: "Basics",
        d: "General machine learning content",
        pick: "all",
        v: [
          r.tgc_ml,
          r.tgc_math_decision_making
        ]

      },

      {
        t: "Math",
        d: "Video series which can be effectively consumed in audio format, without losing too much value. Prefer to watch these, but since you'll have a lot on your visual-learning plate, I've listed resources which you can listen to and save time",
        pick: "all",
        v: [
          r.tgc_linear_algebra,
          r.tgc_calc,
          r.tgc_stats,
          r.tgc_info_theory
        ]
      },

      {
        t: "Podcasts",
        d: "Once you've gotten your fill of the above resources, time to go into auto-pilot. Try a few of these podcasts, find your favorites, and coast.",
        pick: "any",
        v: [
          r.lex_fridman,
          r.twiml_and_ai,
          r.linear_digressions,
          r.oreilly_data_show,
          r.talking_machines,
          r.data_skeptic,
          r.learning_machines_101
        ]
      }
    ]
  }
}

