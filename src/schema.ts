import { FormScheme } from '@anmeldung/blocks';

export let formScheme: FormScheme = {
    projectTitle: 'Schwarzbunt 2022',
    sections: [
        {
            headline: 'Anmeldung',
            blocks: [
                {
                    type: 'Richtext',
                    payload:
                    {
                        headline: 'Anmeldedaten',
                        markup: '<p> \
                        Du meldest dich und deine Gruppe als Gruppenvertreter*in durch Ausfüllen dieses Formulars und Bezahlung des Lagerbeitrags verbindlich zum schwarzbunt – das überbündische Lager im Norden 2020 – an. Als Gruppenvertreter*in bist du verantwortlich für deine Gruppe, dienst dem Schwarzbunt-Team als Ansprechpartner*in. Du solltest daher mindestens 18 Jahre alt sein. Solltest du zum Zeitpunkt der Anmeldung noch nicht 18 Jahre alt sein, lass dich und deine Gruppe am besten über deinen Dachverband anmelden oder suche dir eine befreundete Gruppe, die dich und deine Gruppe anmeldet. Ansonsten muss die \
                     erforderliche Einwilligung deiner gesetzlichen Vertretung vorliegen. Bitte sorge dafür, dass alle Teilnehmer*innen deiner Gruppe sich bei dir anmelden und einen ausgefüllten Gesundheitsbogen zum Lager mitbringen. Vorlagen dafür findest du unter <a target="_blank" href="https://schwarzbunt.net/anmeldung/">https://schwarzbunt.net/anmeldung/</a>. \
                        Nach der Anmeldung lassen wir dir weitere Informationen zum Lager, der Verpflegungsbuchung über den Webshop sowie eine Zahlungsaufforderung per Email zukommen. Den Lagerbeitrag für dich und alle von dir angemeldeten Gruppenmitglieder in Höhe von 45€ pro Person (bis 15.03.2020) bzw. 50€ (ab dem 16.03.2020) musst du innerhalb von 2 Wochen an schwarzbunt (Nordwärts e.V., IBAN: DE77 2585 0110 0230 4953 19, BIC: NOLADE21UEL) überweisen.     Hierfür bist du als anmeldender Gruppenvertreter verantwortlich. Eine Stornierung und damit verbundene Rückerstattung ist nicht möglich. Weitere Personen können von dir zum tagesaktuellen Beitragssatz bis zum Lager nachgemeldet werden. Hierzu fülle bitte eine weitere Anmeldung aus und verwende den identischen Gruppennamen deiner ursprünglichen Anmeldung. \
                    </p> \
                    <p>Wenn du mit Manpower unterstützen willst, melde dich bei der Helferzentrale. Die Helferzentralen-Registrierung wird demnächst freigeschaltet.</p> \
                    <p>Der Lagerbeitrag enthält die Kosten für Programm, Übernachtung und Lagerplatz. Für die Beantragung von Zuschüssen, zum Beispiel beim Stadt-Jugend-Ring, seid ihr selbst verantwortlich. Übrigens wusstest du schon, dass für eure nachhaltige Anreise mit öffentlichen Verkehrsmitteln, Fahrrad oder zu Fuß eine kleine Überraschung auf dem Lager auf euch wartet?</p> \
                    '
                    }
                },
                {
                    type: 'FormInput',
                    payload:
                    {
                        label: 'Vorname',
                        placeholder: 'Max',
                        name: 'txt_vorname',
                        required: true
                    }
                },
                {
                    type: 'FormInput',
                    payload:
                    {
                        label: 'Nachname',
                        placeholder: 'Müller',
                        name: 'txt_nachname',
                        required: true
                    }
                },
                {
                    type: 'FormInput',
                    payload:
                    {
                        label: 'Fahrtenname',
                        placeholder: 'Max',
                        name: 'txt_fahrtenname'
                    }
                }
            ]
        }
    ]
};