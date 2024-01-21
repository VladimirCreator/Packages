/* @VladimirCreator created this file at 3:23 AM on Sun 21 Jan 2024.
   @VladimirCreator modified this file at 3:32 AM on Sun 21 Jan 2024 last time.
	 Most of content was imported from ../component/Books.tsx.
*/

/// `ProgrammingLanguage` also includes not programming languages.
type ProgrammingLanguage = // I initially did all of them const . = [] as const
	'TypeScript' | 'JavaScript' |
	'Swift' |
	'C#' | /* @VladimirCreator added this on 2:06 AM on Sun 21 Jan 2024 */
	'C++'| /* @VladimirCreator added this on 2:19 AM on Sun 21 Jan 2024 */'C' |
	'HyperText Preprocessor' |
	'HyperText Markup Language' |
	'Cascading Style Sheets' /* @VladimirCreator added this on 2:06 AM on Sun 21 Jan 2024 */

type Topic_RENAME =
	'Algorithms & Data Structures' |
	'Design Patterns'

type RelatedTopic = /* @VladimirCreator added this at 1:31 AM...1:33 AM Sun 21 Jan 2024 */
	'React' |

	'React Native' | 'Electron' |

	'GraphQL' |

	'Angular'

export type Topic =
	ProgrammingLanguage |
	Topic_RENAME |
	RelatedTopic
