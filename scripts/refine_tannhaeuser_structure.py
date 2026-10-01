import json

with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

# Act 1 Scene 1 Complete German & English Descriptions
act1_sc1_orig = (
    "Die Bühne stellt das Innere des Venusberges (Hörselberges bei Eisenach) dar. Weite Grotte, welche sich im Hintergrunde durch eine Biegung nach rechts wie unabsehbar dahinzieht. Aus einer zerklüfteten Öffnung, durch welche mattes Tageslicht hereinscheint, stürzt sich die ganze Höhe der Grotte entlang ein grünlicher Wasserfall herab, wild über Gestein schäumend; aus dem Becken welches das Wasser auffängt, fliesst nach dem ferneren Hintergrunde der Bach hin, welcher dort sich zu einem See sammelt, in welchem man die Gestalten badender Najaden und an dessen Ufern gelagerte Sirenen gewahrt. Zu beiden Seiten der Grotte Felsenvorsprünge von unregelmässiger Form, mit wunderbaren, korallenartigen, tropischen Gewächsen bewachsen. Vor einer nach links aufwärts sich dehnenden Grottenöffnung, aus welcher ein zarter rosiger Dämmer herausscheint, liegt im Vordergrunde Venus auf einem reichen Lager, vor ihr, das Haupt in ihrem Schosse, die Harfe zur Seite, Tannhäuser, halb knieend. Das Lager umgeben, in reizender Verschlingung gelagert, die drei Grazien. Zur Seite und hinter dem Lager zahlreiche schlafende Amoretten, wild über und nebeneinander gelagert, einen verworrenen Knäuel bilden, wie Kinder, die, von einer Balgerei ermattet, eingeschlafen sind. Der ganze Vordergrund ist von einem zauberhaften, von unten her durchscheinenden, rötlichen Lichte beleuchtet, durch welches das Smaragdgrün des Wasserfalles, mit dem Weiss seiner schäumenden Wellen, stark durchbricht. Der ferne Hintergrund mit den Seeufern ist von einem verklärt blauen Dufte mondscheinartig erhellt.\n\n"
    "Beim Aufzuge des Vorhanges sind, auf den erhöhten Vorsprüngen mit Bechern, noch die Jünglinge gelagert, welche jetzt sofort den verlockenden Winken der Nymphen folgen und zu diesen hinabeilen; die Nymphen hatten um das schäumende Becken des Wasserfalles den auffordernden Reigen begonnen, welcher die Jünglinge zu ihnen führen sollte: die Paare finden und mischen sich; Suchen, Fliehen und reizendes Necken beleben den Tanz. Aus dem fernen Hintergrunde naht ein Zug von Bacchantinnen, welcher durch die Reihen der liebenden Paare, zu wilder Lust auffordernd, daherbraust. Durch Gebärden begeisterter Trunkenheit reizen die Bacchantinnen die Liebenden zu wachsender Ausgelassenheit auf. Die Berauschten stürzen sich in brünstige Liebesumarmungen. Satyre und Faune sind aus den Klüften erschienen und drängen sich jetzt mit ihrem Tanze zwischen die Bacchanten und liebenden Paare. Sie vermehren durch ihre Jagd auf die Nymphen die Verwirrung; der allgemeine Taumel steigert sich zur höchsten Wut.\n\n"
    "Hier, beim Ausbruch der höchsten Raserei, erheben sich entsetzt die drei Grazien. Sie suchen den Wütenden Einhalt zu tun und sie zu entfernen. Machtlos fürchten sie selbst mit fortgerissen zu werden: sie wenden sich zu den schlafenden Amoretten, rütteln sie auf und jagen sie in die Höhe. Diese flattern wie eine Schar Vögel aufwärts auseinander, nehmen in der Höhe, wie in Schlachtordnung, den ganzen Raum der Höhle ein und schiessen von da herab einen unaufhörlichen Hagel von Pfeilen auf das Getümmel in der Tiefe. Die Verwundeten lassen, von mächtigem Liebessehnen ergriffen, vom rasenden Tanze ab und sinken in Ermattung. Die Grazien bemächtigen sich der Verwundeten und suchen, indem sie die Trunkenen zu Paaren fügen, sie mit sanfter Gewalt nach dem Hintergrunde zu zerstreuen. Dort nach den verschiedensten Richtungen hin, entfernen sich, teils auch von der Höhe herab durch die Amoretten verfolgt, die Bacchanten, Faunen, Satyren, Nymphen und Jünglinge.\n\n"
    "Ein immer dichterer rosiger Duft senkt sich herab: in ihm verschwinden zuerst die Amoretten, dann bedeckt er den ganzen Hintergrund, so dass endlich, ausser Venus und Tannhäuser, nur noch die drei Grazien sichtbar zurückbleiben. Diese wenden sich jetzt nach dem Vordergrunde zurück; in anmutigen Verschlingungen nahen sie sich Venus, ihr gleichsam von dem Siege berichtend, den sie über die wilden Leidenschaften der Untertanen ihres Reiches gewonnen. Venus blickt dankend zu ihnen. (Der dichte Duft im Hintergrunde zerteilt sich: ein Nebelbild zeigt die Entführung der Europa, welche auf dem Rücken des mit Blumen geschmückten weissen Stieres, von Tritonen und Nereïden geleitet, durch das blaue Meer dahinfährt.)"
)

act1_sc1_trans = (
    "The stage represents the interior of the Venusberg (Hörselberg near Eisenach). A vast subterranean grotto, curving off to the right in the background as if stretching into the infinite distance. Through a rugged cleft in the rocks, where dim daylight filters in, a greenish waterfall plunges down the entire height of the grotto, foaming wildly over boulders; from the basin catching the spray, a brook flows toward the distant background, forming a lake where the figures of bathing Naiads and, reclining along its shores, Sirens are visible. On both sides of the grotto are rocky ledges of irregular form, overgrown with wondrous, coral-like tropical vegetation. In the foreground, before an opening of the grotto extending upward to the left from which a delicate rosy glow shines forth, Venus reclines upon a sumptuous couch; before her, his head resting in her lap, his harp beside him, half-kneeling, is Tannhäuser. Surrounding the couch, reclining in charming intertwining embrace, are the three Graces. Beside and behind the couch are numerous sleeping Cupids, clustered wildly over and beside one another in a tangled knot, like children who have fallen asleep exhausted from a playful scuffle. The entire foreground is illuminated by an enchanted reddish light shining through from below, against which the emerald green of the waterfall and the white of its foaming surges contrast vividly. The distant background with the lakeshores is illumined in the manner of moonlight by a transfigured, glowing blue haze.\n\n"
    "—As the curtain rises, youths holding drinking goblets are still reclining on the elevated rock ledges; they now promptly follow the seductive beckonings of the Nymphs and hasten down to them; around the foaming basin of the waterfall, the Nymphs have begun the enticing round dance that is to lure the youths to them: the couples find and mingle with one another; seeking, fleeing, and charming coquetry animate the dance. From the distant background approaches a train of Bacchantes, sweeping tempestuously through the ranks of the loving couples and inciting them to wild wantonness. Through gestures of ecstatic frenzy, the Bacchantes provoke the lovers to ever-greater abandon. The intoxicated throng surrenders to passionate, ardent embraces of love. Satyrs and fauns have appeared from the chasms and now intrude with their dance between the bacchantes and loving couples. Chasing after the nymphs, they intensify the chaos; the general intoxication mounts to the utmost delirium.\n\n"
    "Here, at the outbreak of the wild frenzy, the three Graces rise in consternation. They seek to restrain the raging revelers and disperse them. Feeling powerless and fearing they will be swept away themselves, they turn to the sleeping Cupids, shake them awake, and drive them aloft. These flutter upward and disperse like a flock of birds, occupying the entire upper vault of the cavern in battle array, and shower down an incessant hail of arrows upon the tumult below. The wounded, seized by a mighty yearning of love, desist from their frantic dance and sink down in exhaustion. The Graces take charge of the wounded and, pairing off the intoxicated revelers, seek to disperse them with gentle constraint toward the background. There, departing in all directions, partly pursued from above by the Cupids, the bacchantes, fauns, satyrs, nymphs, and youths withdraw.\n\n"
    "An ever-denser rosy mist descends: first the Cupids disappear into it, then it veils the entire background so that at last, apart from Venus and Tannhäuser, only the three Graces remain visible. These now turn back toward the foreground; in graceful intertwining postures they approach Venus, as if reporting to her the victory they have won over the wild passions of the subjects of her realm. Venus looks upon them with grateful eyes. (The dense mist in the background parts: a visionary tableau reveals the Abduction of Europa, who, carried upon the back of the flower-adorned white bull and guided by Tritons and Nereids, rides across the blue sea.)"
)

# Act 1 Scene 3 Complete German & English Descriptions
act1_sc3_orig = (
    "Tannhäuser, der seine Stellung nicht verlassen hat, befindet sich plötzlich in ein schönes Tal versetzt. Blauer Himmel, heitere Sonnenbeleuchtung. - Rechts im Hintergrunde die Wartburg; durch die Talöffnung nach links erblickt man den Hörselberg. - Rechts führt auf der halben Höhe des Tales ein Bergweg von der Richtung der Wartburg her nach dem Vordergrunde zu, wo er dann seitwärts abbiegt; in demselben Vordergrunde ist ein Muttergottesbild, zu welchem ein niedriger Bergvorsprung hinaufführt. - Von der Höhe links vernimmt man das Geläute von Herdeglocken; auf einem hohen Vorsprunge sitzt ein junger Hirt mit der Schalmei, dem Tale zugekehrt."
)
act1_sc3_trans = (
    "Tannhäuser, who has not changed his position, finds himself suddenly transported into a beautiful valley. Blue sky, cheerful sunlight.—To the right in the background, the Wartburg Castle; through the opening of the valley to the left, one catches sight of the Hörselberg.—To the right, halfway up the valley slope, a mountain path leads from the direction of the Wartburg toward the foreground, where it then turns aside; in this same foreground stands a shrine of the Virgin Mary, reached by a low rocky ledge.—From the height on the left, the ringing of herd bells is heard; on a high ledge sits a young shepherd with his shawm, facing toward the valley."
)

parsed['act1'][0]['originalDescription'] = act1_sc1_orig
parsed['act1'][0]['description'] = act1_sc1_trans

parsed['act1'][2]['originalDescription'] = act1_sc3_orig
parsed['act1'][2]['description'] = act1_sc3_trans

# Curated set-pieces in Tannhäuser: ONLY these specific cues retain a pieceTitle
CURATED_PIECE_TITLES = {
    'a1_s1_c2': "Sirenenchor (Naht euch dem Strande!)",
    'a1_s2_c13': "Hymne an die Venus (Strophe I: Dir töne Lob!)",
    'a1_s2_c15': "Hymne an die Venus (Strophe II: Dank deiner Huld)",
    'a1_s2_c27': "Hymne an die Venus (Strophe III: Stets soll nur dir)",
    'a1_s3_c2': "Lied des Hirten (Frau Holda kam aus dem Berg hervor)",
    'a1_s3_c5': "Pilgerchor (Zu dir wall ich, mein Jesus Christ)",
    'a2_s1_c2': "Hallenarie (Dich, teure Halle, grüss ich wieder)",
    'a2_s4_c2': "Einzug der Gäste (Freudig begrüssen wir die edle Halle)",
    'a2_s4_c11': "Sängerwettstreit: Wolframs Gesang an die Minne (Blick ich umher)",
    'a3_s1_c7': "Chor der älteren Pilger (Beglückt darf nun dich, o Heimat)",
    'a3_s1_c13': "Elisabeths Gebet (Allmächt'ge Jungfrau, hör mein Flehen!)",
    'a3_s2_c1': "Wolframs Lied an den Abendstern (O du mein holder Abendstern)",
    'a3_s3_c25': "Romerzählung (Inbrunst im Herzen)",
    'a3_s3_c78': "Schlusschor der jüngeren Pilger (Der Gnade Heil)",
}

# Update all cues across all acts
total_cues = 0
cleared_cues = 0
retained_cues = 0

for act_key in ['act1', 'act2', 'act3']:
    for sc in parsed[act_key]:
        for c in sc['cues']:
            total_cues += 1
            cid = c['id']
            if cid in CURATED_PIECE_TITLES:
                c['pieceTitle'] = CURATED_PIECE_TITLES[cid]
                retained_cues += 1
            else:
                if 'pieceTitle' in c:
                    del c['pieceTitle']
                cleared_cues += 1

print(f"Total cues: {total_cues}")
print(f"Retained curated piece titles: {retained_cues}")
print(f"Cleared dialogue piece titles: {cleared_cues}")

with open('scripts/tannhaeuser_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(parsed, f, ensure_ascii=False, indent=2)

print("Saved updated scripts/tannhaeuser_parsed.json successfully.")
