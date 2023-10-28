import Legacy from "../books/Legacy.jpg";
import final from "../books/final.jpg";
import inheritance from "../books/inheritance.jpg";
import brothers from "../books/brothers.jpg";
import angelsdemons from "../books/angelsdemons.jpg";
import moon from "../books/moon.jpg";
import perks from "../books/perks.jpg";
import shelter from "../books/shelter.jpg";

const bookId = [0, 1, 2, 3, 4, 5, 6, 7];

const imagePaths = [
  inheritance,
  Legacy,
  final,
  brothers,
  angelsdemons,
  moon,
  perks,
  shelter
];
  
  const title = [
    "The Inheritance Games",
    "The Hawthorne Legacy",
    "The Final Gambit",
    "The Brothers Hawthorne",
    "Angels & Demons",
    "Moon Called",
    "The Perks of Being a Wallflower",
    "Shelter"
  ];

  const keyLinks = [
    // The Inheritance Games (1)
    "pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy",
    // The Hawthorne Legacy
    "pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy",
    // The Final Gambit
    "pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy",
    // The Brothers Hawthorne
    "pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo",
    // Angels & Demons
    "pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo",
    // Moon Called
    "pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy",   
    // The Perks of Being a Wallflower
    "pk_test_51O4tNdJNUdFsy0RxW2OOoCizqLfojhZ2hz23uR8n7ARHHoFMwBTevbQCB7AAzn2gj5Ky8Cr1REZQoqUmv05m86PF00xW4cGpzy",
    // Shelter
    "pk_live_51O4tNdJNUdFsy0RxFlyGv5xfD32NdCxk2gmAQtl9bwWMTc1uf8oDMEisucnVJ4OosRWzcEb6FDaIBgFQztZ6JkH800vix2hlXo"
  ]

  const bookSummary = [
    "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch, Avery has no idea why—or even who Tobias Hawthorne is.To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man's touch—and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed. This includes the four Hawthorne grandsons: dangerous, magnetic, brilliant boys who grew up with every expectation that one day, they would inherit billions. Heir apparent Grayson Hawthorne is convinced that Avery must be a conwoman, and he is determined to take her down. His brother, Jameson, views her as their grandfathers long last hurrah: a twisted riddle, a puzzle to be solved. Caught in a world of wealth and privilege with danger around every turn, Avery will have to play the game herself just to survive. The games continue in The Hawthorne Legacy, The Final Gambit, and The Brothers Hawthorne.",
    "The Inheritance Games ended with a bombshell, and now heiress Avery Grambs has to pick up the pieces and find the man who might hold the answers to all of her questions—including why Tobias Hawthorne left his entire fortune to Avery, a virtual stranger, rather than to his own daughters or grandsons. Thanks to a DNA test, Avery knows she is not a Hawthorne by blood, but clues pile up hinting at a deeper connection to the family than she had ever imagined. As the mystery grows and the plot thickens, Grayson and Jameson, two of the enigmatic and magnetic Hawthorne grandsons, continue to pull Avery in different directions. And there are threats lurking around every corner, as adversaries emerge who will stop at nothing to see Avery out of the picture—by any means necessary. With nonstop action, aspirational jet setting, Knives Out, like family intrigue, swoonworthy romance, and billions of dollars hanging in the balance, The Hawthorne Legacy will thrill Jennifer Lynn Barnes fans and new readers alike.",
    "To inherit billions, all Avery Kylie Grambs has to do is survive a few more weeks living in Hawthorne House. The paparazzi are dogging her every step. Financial pressures are building. Danger is a fact of life. And the only thing getting Avery through it all is the Hawthorne brothers. Her life is intertwined with theirs. She knows their secrets, and they know her. But as the clock ticks down to the moment when Avery will become the richest teenager on the planet, trouble arrives in the form of a visitor who needs her help—and whose presence in Hawthorne House could change everything. It soon becomes clear that there is one last puzzle to solve, and Avery and the Hawthorne brothers are drawn into a dangerous game against an unknown and powerful player. Secrets upon secrets. Riddles upon riddles. In this game, there are hearts and lives at stake—and there is nothing more Hawthorne than winning.",
    "Jameson Hawthorne is a risk-taker, a sensation-seeker, a player of games. When his mysterious father appears and asks for a favor, Jameson can’t resist the challenge. Now he must infiltrate London’s most exclusive underground gambling club, which caters to the rich, the powerful, and the aristocratic, and win an impossible game of greatest stakes. Luckily, Jameson Hawthorne lives for impossible. Drawn into twisted games on opposite sides of the globe, Grayson and Jameson with the help of their brothers and the girl who inherited their grandfather’s fortune—must dig deep to decide who they want to be and what each of them will sacrifice to win.",
    "An ancient secret brotherhood. A devastating new weapon of destruction. An unthinkable target. When world-renowned Harvard symbologist Robert Langdon is summoned to his first assignment to a Swiss research facility to analyze a mysterious symbol—seared into the chest of a murdered physicist—he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati...the most powerful underground organization ever to walk the earth. The Illuminati has now surfaced to carry out the final phase of its legendary vendetta against its most hated enemy—the Catholic Church. Langdons worst fears are confirmed on the eve of the Vatican’s holy conclave, when a messenger of the Illuminati announces they have hidden an unstoppable time bomb at the very heart of Vatican City. With the countdown under way, Langdon jets to Rome to join forces with Vittoria Vetra, a beautiful and mysterious Italian scientist, to assist the Vatican in a desperate bid for survival. Embarking on a frantic hunt through sealed crypts, dangerous catacombs, deserted cathedrals, and the most secretive vault on earth, Langdon and Vetra follow a 400-year-old trail of ancient symbols that snakes across Rome toward the long-forgotten Illuminati lair...a clandestine location that contains the only hope for Vatican salvation.",
    "Mercy Thompson is a shapeshifter, and while she was raised by werewolves, she can never be one of them, especially after the pack ran her off for having a forbidden love affair. So shes turned her talent for fixing cars into a business and now runs a one-woman mechanic shop in the Tri-Cities area of Washington State. But Mercys two worlds are colliding. A half-starved teenage boy arrives at her shop looking for work, only to reveal that he is a newly changed werewolf—on the run and desperately trying to control his animal instincts. Mercy asks her neighbor Adam Hauptman, the Alpha of the local werewolf pack, for assistance. But Mercys act of kindness has unexpected consequences that leave her no choice but to seek help from those she once considered family—the werewolves who abandoned her...",
    "Standing on the fringes of life offers a unique perspective. But there comes a time to see what it looks like from the dance floor. This haunting novel about the dilemma of passivity vs. passion marks the stunning debut of a provocative new voice in contemporary fiction: The Perks of Being a Wallflower. This is the story of what it is like to grow up in high school. More intimate than a diary, Charlies letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory. The world of first dates and mixed tapes, family dramas and new friends. The world of sex, drugs, and The Rocky Horror Picture Show, when all one requires is that perfect song on that perfect drive to feel infinite.  Through Charlie, Stephen Chbosky has created a deeply affecting coming-of-age story, a powerful novel that will spirit you back to those wild and poignant roller coaster days known as growing up.",
    "Mickey Bolitars year can not get much worse. After witnessing his fathers death and sending his mom to rehab, he is forced to live with his estranged uncle Myron and switch high schools. Fortunately, he has met a great girl, Ashley, and it seems like things might finally be improving. But then Ashley vanishes. Mickey follows Ashleys trail into a seedy underworld that reveals that Ashley is not who she claimed to be. And neither was Mickeys father. Soon Mickey learns about a conspiracy so shocking that it leaves him questioning everything about the life he thought he knew. First introduced to readers in Harlan Cobens novel Live Wire Mickey Bolitar is as quick-witted and clever as his uncle Myron, and eager to go to any length to save the people he cares about. Follow Mickey Bolitar on his next adventure in Seconds Away! Look for all three books in the series!"
  ];
  const author = [
    "Jennifer Lynne Barnes",
    "Jennifer Lynn Barnes",
    "Jennifer Lynn Barnes",
    "Jennifer Lynn Barnes",
    "Dan Brown",
    "Patricia Briggs",
    "Stephen Chbosky",
    "Harlan Coben"
  ]
  
  const cost = [
      "$20.00",
      "$20.00",
      "$20.00",
      "$20.00",
      "$20.00",
      "$20.00",
      "$20.00",
      "$20.00"
    ];

    const productLinks = [
      "buy_btn_1O5e8iJNUdFsy0RxgeJcQcq1", // The Inheritance Games
      "buy_btn_1O5e7UJNUdFsy0RxdMTRQVu7", // The Hawthorne Legacy
      "buy_btn_1O5djjJNUdFsy0RxwIictUzY", // The Final Gambit
      "buy_btn_1O6ILMJNUdFsy0RxYUCELv3h", // The Brothers Hawthorne
      "buy_btn_1O6IExJNUdFsy0Rx2HRVWBDj", // Angels & Demons
      "buy_btn_1O5e4PJNUdFsy0RxZKL3gNgR", // Moon Called
      "buy_btn_1O5dk3JNUdFsy0RxrDoo9WIf", // The Perks of Being a Wallflower
      "buy_btn_1O6IHaJNUdFsy0RxgZoo7psf"  // Shelter
    ]

export {bookId, imagePaths, author, cost, title, bookSummary, productLinks, keyLinks};