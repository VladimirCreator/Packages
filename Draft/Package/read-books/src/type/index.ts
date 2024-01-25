/// `ProgrammingLanguage` also includes not programming languages.
type ProgrammingLanguage =
	'TypeScript' | 'JavaScript' |
	'Swift' |
	'C#' |
	'C++'| 'C' |
	'HyperText Preprocessor' |
	'HyperText Markup Language' |
	'Cascading Style Sheets'

type Topic_RENAME =
	'Algorithms & Data Structures' |
	'Design Patterns'

type RelatedTopic =
	'React' |

	'React Native' | 'Electron' |

	'GraphQL' |

	'Angular'

export type Topic =
	ProgrammingLanguage |
	Topic_RENAME |
	RelatedTopic
