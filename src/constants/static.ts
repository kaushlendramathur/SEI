export interface center{
 locateUs:string[],
 about:string,
 transportHighlights:string[],
}

export const centersText: { [key: string]: center } = {
  Kolkata: {
    locateUs: [
      "'Debamita', B.B.T Road , Vill. - Gopalpur,",
      'P.O. Sarkarpool, P.S. - Maheshtala,',
      'Kolkata - 700141,India',
      'MTI No : 303014',
    ],
    about:
      'SEIET Kolkata, is located in the heart of Kolkata city bringing all means of transport to its doorstep.',
    transportHighlights: [
      '45 minutes from Dharmtala.',
      '1 Hour 15 minutes from Airport.',
      '60 minutes from Howrah Station.',
      '60 minutes from Sealdah station.',
      '10-15 minutes from Taratalla',
      '10-15 minutes from Parnosree',
    ],
  },
  Faridabad: {
    locateUs: [
      "S-13 Sector 11D Market,",
      "Faridabad - 121006, Haryana, India",
      'MTI No : 103011',
    ],
    about:
      'SEIET Faridabad, located within the National Capital region of Delhi in North India.',
    transportHighlights: [
      '30 minutes from Delhi.',
      '1 Hour from IGI Airport.',
      '5 minutes from Faridabad railway station.',
      '2 minutes walking distance from Escorts Mujesar Metro station.'
    ],
  },
}