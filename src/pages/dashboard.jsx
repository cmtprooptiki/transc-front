import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Welcome from '../components/Welcome';
import '../../css/dashboard.css';
import { LogOut,reset } from '../features/auth_slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import AudioTranscriber from '../components/ai_transciption/AudioTranscriber';
import { createContext } from 'react';
import TranscriberSummary from '../components/ai_transciption/TranscriberSummary';
import Navbar from '../components/navbar';

export const TranscriptionContext = createContext();

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(LogOut()).then(() => {
        navigate("/"); // ✅ Redirect after logout
    });
  };
  const test=`Αυτό που θέλω να μου πεις είναι το νόμιμο σου γενικότερα, όπως θα καταλαβαίνεις τα πράγματα, έτσι, πως θα τα συζητήσουμε. Ωραία, θέλεις να μου πεις λίγο για εσένα, σε ποιο τάξη πας. Πάω Βιτελικείου, σε Πάλλου συγκεκριμένα. Ποια περιοχή. Κορδελός. Και πόσο χρονών είσαι. Είμαι δεκαετή. Πόσο χρονών είσαι. Είμαι δεκαετή. Πόσο χρονών είσαι. Είμαι δεκαετή. Ποια περιοχή. Κορδελός. Και πόσο χρονών είσαι. Είμαι δεκάξη και τον Αύγουστο θα πάω δεκαετά. Ωραία, λοιπόν, θέλεις να ξεκινήσουμε. Ναι. Θέλω να πεις, μόνο για να μπορεί να έχω γραφτεί κι αυτό, ότι σε έχω ενημερώσει για το τι είναι η έρευνα, ότι μπορείς να σταματήσεις οποιαδήποτε στιγμή θέλεις, αν δεν αισθάνεσαι καλά. Τα ξέρεις όλα αυτά. Ωραία. Να ξέρω. Ωραία, ωραία. Πάμε λοιπόν να δούμε λιγάκι τα σχέδια σου για το μέλλον και τι θέλεις να γίνεις στα μεγαλώσεις. Έχω πάει στον τομέα υγείας, για αισθητικός, αλλά περιμένω να δάμα θα με πάρουν στην τρίτη λυκείου, γιατί γίνεται μία κλήρωση και άμα θα με πάρουν, λογικά θα πάω στην κομματική, αλλά δεν είμαι σίγουρη ακόμη. Θα το σκεφτώ περισσότερο το καλοκαίρι. Αυτό. Ωραία, ωραία. Γενικότερα, ποιο θα είχες το τίμητα όνειρά σου για το μέλλον. Πώς φαντάσεις ότι θα είσαι σε κάποια χρόνια από τώρα. Να το πω την αλήθεια, δεν ξέρω. Τα έχω σκεφτεί, αλλά δεν τα έχω βάλει σε μία τάξη ακόμα, συγχώς. Και δεν ξέρω, αλλά είναι λίγο νωρίς να το σκεφτώ ακόμα αυτό. Έτσι το νομίζω, δεν ξέρω. Ναι. Το σκέφτεσαι όμως, είναι σε αυτή τη διαδικασία που το κοιτάζεις. Τώρα, πάμε λίγο να μου πεις για το σχολείο σου. Εσύ, έτσι όπως λειτουργεί, όπως θα βλέπεις να λειτουργεί, δάσκαλε αυτά που ζητάνε, έτσι όπως είναι τα πράγματα. Ποιο θεωρείς ότι είναι οι τρεις προτεραιότητες που βάζει το σχολείο. Να μας... Σω. Δεν βρίσκω τη λέξη. Να μας συμμαθήνουν νέα πράγματα και να μας καθοδηγούν στο σωστό δρόμο. Και γενικά, αυτό νομίζω. Αυτό έχουν τα προτεραιότητα. Αυτό ναι. Τώρα, μέσα στα τελευταία χρόνια, εσύ κάποιος φίλος σου έχει υποστεί μπούλινγκ, ή ψυχολογικό, ή σωματικό, ή λεκτικό. Δεν θα πω ότι είναι ακριβώς φίλος μου, αλλά είναι γνωστή στην τάξη μου, απλά επειδή είναι διαφορετική. Ακούει άλλους στη μουσική, δίνεται διαφορετικά. Έχει διαφορετική νοοτροπία. Κάποια παιδιά στην τάξη, λένε, ας πούμε... Τη χαρτηρίζουνε σαν... Πώς να εξηγήσεις τώρα αυτά θεωρηματικά... Κάπως σαν νήμο. Δεν ξέρω πώς να εξηγήσεις τώρα να... Αυτό. Και απλά την βάζουνε λίγο στην πονή. Αυτό, εσύ αυτό και εσύ εκείνο. Λεπτικά όμως, έτσι. Λεπτικά, νόμιζα. Τώρα, μήπως σε αυτό το χρόνο έχεις ακούσει κάτι για το διαδίκτυο, ότι κάτι έχει συμβεί, κάποιος έχει δεχτεί... Επίθεση, υπογεσμό στο διαδίκτυο. Όχι, όλα καλά πάνε. Ευτυχώς, αυτό το ναι. Ωραία. Τώρα, σε περίπτωση που θα έχει συμβεί κάτι σε εσένα, ή σε κάποιον πολύ κοντινό σου φίλο, από ποιον θα ζητήσεις βοήθεια. Τους γονείς μου και τους καθηγητές. Άμα δω ότι κάποιος είναι πρόθυμος να μου βοηθήσει, θα το απευθυνθώ εκεί. Και είναι συνήθως πρόθυμοι. Ναι, είναι πρόθυμοι. Ωραία, ωραία. Τώρα, πιστεύεις ότι υπάρχουν παράδοσες που καθιστούν ένα παιδί περισσότερο ευάλωτο από κάποια άλλα στον ευθουρισμό. Είναι περισσότερο. Δέχονται μπούν τα παιδιά που δεν μιλάνε και είναι πιο κλειστοί σαν χαρακτήλες. Οπότε, πιστεύω, χρειάζεται βοήθεια να ανεβούν ψυχολογικά και να προσπαθούν να ανοιχτούν περισσότερο σε κάποια θέματα. Ας πούμε, άμα ανοιχτούν bullying, να ζητήσουν βοήθεια. Να μην κλειστούν σαν αυτό τους. Ναι. Τώρα, πες ότι υπάρχει μία έκταση ανάγκη. Οποιοδήποτε δεν έχει να κάνει με τον ευθουρισμό. Εσύ περισσότερο πιστεύεσαι στους φίλους, στους καθηγητές, στους γονείς, στον διευθυντή, στους φίλους που έχεις στα μέσα της κοινωνικής δικτύωσης. Είναι ανάλογο αυτό. Όπως νιώθω εκείνη τη στιγμή. Δηλαδή, θα μπορεί να το προσπαθήσω να το λύσω μόνη μου, αλλά άμα δω ότι δυσκολεύομαι, μπορεί να απευθυνθώ πρώτα στην οικογένεια και μετά στους φίλους. Και στον διευθυντή και στους καθηγητές. Ο διευθυντής είναι προβάσιμος, ναι. Και οι υποδιευθυντές, γιατί έχουμε δύο, πολλοί συζητήσιμοι, βοηθάνε, γιατί με την κοπέλα που σας είχα πει για την συντάξη, που δεχότανε τον bullying, είχαμε πάει και είχαμε ζητήσει κάποια βοήθεια και ήταν πάρα πολύ πρόστιμη, ευτυχώς. Ωραία, ωραία, ωραία. Τώρα, πες μου κυρίως, τι νιώθεις όταν βρίσκεσαι μέσα στο σχολείο, τι θα είναι οι αισθήματά σου. Κάποιες φορές λίγο συναισθηματικά φορτωμένοι, γιατί, εντάξει, 7 ώρες είναι αυτές. Εντάξει, αλλά νιώθω μια ανακούφιση, γιατί μας προσέχουν, δηλαδή, άμα πάθει κάτι, ένα παιδί θα τρέξουν. Αυτό. Αλλά, εντάξει, κάποια παιδιά είναι λίγο... εντάξει, είναι λίγο ζωή. Αλλά, εντάξει, όλα καλά. Τώρα, ποιοι παράγοντες οι άνθρωποι θεωρείς που επηρεάζουν τις αποφάσεις που αφορούν τη ζωή σου. Τώρα δεν ξέρω, να σας πω την αλήθεια. Κάποιοι άνθρωποι που μπορεί να έχουν ζητήσει βοήθεια, να μου έχουν δώσει συμβουλές. Ο εαυτός μου, πάνω απ' όλο, βασικά, γιατί κάποιες φορές κάνω συζητήσεις με τον εαυτό μου και βάζω κάποια πράγματα στην τάξη. Οπότε αυτό, ναι. Πρώτα αυτό, δηλαδή, είναι το πρώτο που θέλεις να εμπιστευτείς για να πάρεις αποφάσεις. Ναι. Τώρα, τα μέσα κοινωνικής δικτύωσης, τα ψηφιακά, όλα αυτά, πλατφόρμες, YouTube, ιστορίες, κλπ. Εκεί που ανταλλιάζουμε μηνύματα, οτιδήποτε επηρεάζει το τρόπο που παίρνουμε αποφάσεις. Ναι. Πιστεύω επηρεάζουν πολύ, αλλά είναι ανάλογο των χαρακτήρων του καθενότητας. Δηλαδή, υπάρχουν άτομα που δεν θα τους επηρεάσει τι θα πούνε στα social media. Υπάρχουν κάποιοι άτομα, όμως, που επηρεάζουν πάρα πολύ ψυχολογικά. Και συνήθως, τι αποφάσεις επηρεάζουν αυτά τα πράγματα. Πώς θα αλλάξω κάτι στον εαυτό μου, τι δουλειά θα κάνω, αυτά πάνω κάτω. Τα βασικά. Τα βασικά. Τώρα, εμείς όταν η δική μας συναισθηματική κατάσταση, οικογενειακή κατάσταση, οικονομική κατάσταση επηρεάζει το τρόπο που παίρνουμε αποφάσεις. Πιστεύω πως όχι. Γιατί το λες αυτό, πες μου λίγο. Δηλαδή, ας πούμε, όταν οικονομικά δεν θα επηρεάσει τι δουλειά θα κάνουμε, πόσο μακριά θα πάμε να σπουδάσουμε. Από αυτή την άποψη. Βασικά, ναι, να πω την αλήθεια, αλλά δεν ξέρω τώρα. Πιστεύω ότι και οικονομικά να μην είναι κάποιος εντάξει, θα συνεχίζει να έχει όνειρα. Αλλά μέχρι να τα πετύχει αυτό. Άρα θεωρείς ότι τίποτα είναι απαγορευτικό, ότι μπορούμε να παίρνουμε αποφάσεις για τη ζωή μας, παρόλο που οι παράγοντες δεν μας βοηθάνε. Ναι, και ότι μπορεί να υπάρχουν κάποιο εμπόδιο, αλλά άμα κάποιος θέλει κάτι, πιστεύω ότι θα το πετύχει. Επόμενος, οι πιο σημαντικούς παράγοντες είναι οι επιτιμήσεις ειδικές μας. Ακριβώς. Ωραία, ωραία. Ωραία. Λοιπόν, πάμε λίγα και να δούμε για τα ψηφιακά. Πες μου πόσο χρόνο κάθε μέρα φιερώνεις στα μέσα κοινωνικής δικτύωσης, πλατφόρμες και για μηνύματα. Για να πω την αλήθεια, έχω λίγο... Ξεχύει το παράκανες. Δυστυχώς. Αλλά χρησιμοποιώ το ήτανε γενικά. Μιλάω με φίλους, κάποιες φορές όταν είμαι στο σχολείο, να στέλνω στη μαμά μου να με ρωτάει, ας πούμε, αν είμαι καλά. Αλλά εντάξει. Όταν έχω σχολείο είναι λιγότερες οι ώρες, προφανώς. Αλλά όταν έχω ελεύθερο χρόνο είναι πολλές. Τις έχεις μετρήσει? Όχι. Περίπου. Περίπου τις μετρήσεις. Να σας πω λίγο περίπου. Στα περίπου, ναι. Τέσσερις, πέντε, δεν ξέρω. Και μου φαίνεται μου ακούνται πολλές. Αυτό. Αλλά είναι όλες μαζί, στην ίδια στιγμή το βράδυ, είναι όλη τη μέρα. Ναι, είναι όχι συνολικά. Ας πούμε, μπορεί να περάσω το χρόνο μου χωρίς το κινητό, ας πούμε, και μετά να ξαναμπώ στο κινητό. Τώρα, τι σου αρέσει περισσότερο και τι λιγότερο στο διαδίκτυο. Τα σχόλια που κάνουν κάποιοι πίσω από προφίλ, χωρίς φωτογραφία, και τα σχόλια που κάνουν χωρίς να ξέρουν κάποιον άνθρωπο και τι έχει πετύχει, και τι σκοπούς έχει στη ζωή. Τα κακοπροαίρετα σχόλια. Αυτό που σου αρέσει περισσότερο στο διαδίκτυο, τι είναι. Να βοηθάνε ο ένας τον άλλο, να έχουν καλοπροαίρετες γνώμες. Ακόμα και κακείς να είναι οι γνώμες, να τις εκφράζουν καλά, χωρίς πρισιές, χωρίς να προσβάλλουν τον άλλον. Τι πιστεύεις ότι το ψηφιακό χώρο, το ίντερνετ, το διαδίκτυο, προσφέρει στους νέους και γι' αυτό το προτιμάνε από όποια δημοκρατία μέσα. Προσφέρει κάποιες φορές ψυχολογία, αρχικές ικέας, δεν το πω ακριβώς έτσι. Ότι μπορούν να μιλάνε με ανθρώπους που δεν είναι κοντά, δεν μένουν κοντά, δηλαδή έχουν μια απόσταση. Τώρα, για πιο μικρές ηλικίες που απλά μπαίνουν σε κάποιες ισοσελίδες και παίζουν παιχνίδια. Αυτό, ψυχολογία κυρίως. Αυτό, μουσική, όλα αυτά. Θα έλεγες ότι αισθάνεσαι ασφαλής στο διαδίκτυο? Κάποιες φορές ναι, κάποιες φορές όχι. Τις πληροφορίες που βρίσκεις, τις εμπιστεύεις σε όλες? Όχι. Κάποιες πληροφορίες είναι ψευδείς και πρέπει να κάνω κι άλλες έρευνες πάνω σε αυτό. Ότι δεν εμπιστεύουμε μόνο μια πληροφορία, θέλω να το ψάξω κι άλλο. Ναι. Για να είμαι σίγουρη, να πω αυτό είναι σωστό. Άρα, το φαινόμενο της παραπληροφόρησης, αυτό λίγο που περιγράφεις, πώς να αντιλαμβάνεσαι ότι λειτουργεί? Πιστεύω ότι υπάρχουν πολλές ισοσελίδες που φέρνουν την παραπληροφόρηση και απλά δεν τους ενδιαφέρει πώς θα το πάρουν το κάθε άτομο. Γενικά υπάρχει πάρα πολύ στην γενιά μας. Τώρα, εσύ φοβάσαι, δηλαδή εξαιτίας της παραπληροφόρησης, έχεις αλλάξει τον τρόπο που ψάχνεις τις πληροφορίες, κοπείς ποστάρες ίσως. Ναι. Sorry, κόλλησα. Όχι, καλά όχι. Όχι. Δηλαδή τώρα, ας πούμε, βλέπεις τις πληροφορίες, έτσι, οπότε λες όχι δεν είμαι σίγουρη, μπορεί και να μην είναι, να είναι ψευδίες. Άρα τι θα κάνεις εσύ για να, έχεις αλλάξει τον τρόπο, δηλαδή πώς θα το κάνεις, θα την περιμένεις, δεν θα το περιμένεις, να το βρεις κάπου αλλού, θα το ποστάρεις και θα πεις όχι, μακάρι τώρα να μην είναι τίποτα. Ναι, θα το ψάξω κάπου αλλού, δηλαδή θα το, θα δώσω βάση στο θέμα, αλλά άμα δω ότι δεν βρίσκω κάπου την, στο ίντερνετ αυτό που ψάχνω, θα πάω πεφυθός σε κάποιον άνθρωπο εκτός του ίντερνετ. Α, θα το τσεκάρεις και με πηγαίς εκτός από το διαδίκτυο. Ναι, αυτό. Μάλιστα. Ωραία. Τώρα, εσύ θεωρείς ότι μπορείς να διακρίνεις αν μια πληροφορία είναι αξιόπιστη ή δεν είναι. Εντάξει, κάποιες φορές, ναι, αλλά κάποιες φορές, άμα δεν γνωρίζω πολλά πάνω σε αυτό το τομέα, πιστεύω ότι δεν μπορώ να το διακρίνω, δυστυχώς. Ναι, ναι. Πώς δοκιμάζεις ελεύθερες πληροφορίες. Εντάξει. Τώρα, ανάλογα. Να θυμηθώ. Τι ακριβώς πληροφορία τώρα. Δεν ξέρω. Κάποιες φορές, όταν δεν μου φαίνεται κάτι ότι είναι εντάξει, ότι είναι ψευδής, απλά το δοκιμάζω. Δηλαδή, να πω τώρα, κόλλησα. Όχι, ναι. Απλά θα το βάλεις αυτό, ας πούμε, σε μία μηχανή αναζήτησης για να δεις ποια είναι η αποτελέσματα. Θα την ακυρώσεις, δεν θα ξανασχοληθείς με αυτή τη βίηση ποτέ. Όχι, θα το ψάξω. Δηλαδή, άμα με ενδιαφέρει πολύ, θα το ψάξω. Θα κάτσω να το ψάξω αυτό. Ωραία. Τώρα, σου είχε κάποιος μιλήσεις στο σχολείο ή στην οικογένεια για τις ψευδείς ειδήσεις και πώς τις διακρίνουμε. Κάποιος δάσκαλος, έγινε μία ημερίδα, κάτι. Ναι, και οι γονείς μου και οι φίλοι μου και οι καθηγητές έχουν δώσει βάση σε αυτό το θέμα και ότι τη διακρίνουν τώρα είναι μάλλον αυτό το θέμα. Δηλαδή, μπορεί να πει κάποιος, έχουμε πάλι lockdown, ας πούμε, και θα το καταλάβουμε και θα βρούμε άτομα έξω. Ναι, έξω αυτό. Ναι. Τώρα, για κοινωνικά, απολυτικά, οικονομικά ζητήματα, σ' αρέσουν οι ενημερώνες, μπαίνεις σε σελίδες… Ή κάτι άλλο. Κάποιες φορές με φορτώνουν κάποια συναισθηματικά, γιατί βλέπω άσχημα νέα κάποιες φορές, ειδικά όταν ανοίγω την τηλεόραση και βλέπω ειδήσεις που κάποιες φορές δεν είναι ευχάριστα τα νέα, που εντάξει, στον κόσμο που ζούμε υπάρχουν και τα ευχάριστα, υπάρχουν και τα δυσάρεστα. Οπότε, παρακολουθείς, αλλά όχι δρακτικά συχνά. Ωραία. Δηλαδή, ενημερώνουμε. Ναι, ναι, ναι. Τώρα, πού σου αρέσει να μαθαίνεις, ας το περιορίσουμε ή να το ανοίξουμε, για να δούμε από πού σου αρέσει να παίρνεις τέτοιου είδους πληροφορίες και να βλέπεις ειδήσεις. Από την γειτονιά, την χώρα, το σχολείο, την Ευρώπη, τον κόσμο, τι συνήθως παρακολουθείς. Εγώ πιστεύω ότι τα περισσότερα τα μαθαίνω από ανθρώπους, δηλαδή γνωστούς. Δηλαδή θα ακούσω μια ειδησή και θα το ψάξω ή θα μπω στο Google που δεν είναι 100% έμπιστο, οπότε μπορεί να ανοίξω κάποια τηλεόραση. Αυτό με τη χώρα δεν κατάλαβα. Ναι, δηλαδή ας πούμε, σου αρέσει να βλέπεις ειδήσεις από την Ελλάδα, σου αρέσει να βλέπεις από τον κόσμο, να παρακολουθήσεις εγώ το Facebook του σχολείου που έχει τα νέα του σχολείου. Α, ναι, μπαίνω και στο Facebook του σχολείου. Δηλαδή κάποιες φορές πωστάρουν κάποια πράγματα που με ενδιαφέρουν. Δηλαδή κάτι λέγανε για τις εξετάσεις, δηλαδή τις ώρες, τα μαθήματα. Βγήκα και τα είδα και ενημερώθηκα. Ωραία, ωραία, ωραία. Τώρα, για πες μου λίγο εμείς αν θεωρείς ότι πάνω σε όλα αυτά τα ζητήματα που βλέπεις και μερικές φορές αγώνουν με τις προσωπικές μας αποφάσεις μπορούμε να έχουμε κάποια επίδραση, να αλλάξουν κάποια πράγματα ή όχι, τι πιστεύεις. Πιστεύω, ναι, δηλαδή, αλλά δεν πιστεύω ότι κάποιος θέλει συνεργασία. Δηλαδή πρέπει να πει κάποιος ότι εγώ θα το κάνω αυτό, θες να το κάνεις και εσύ για να βελτιωθούμε σαν χώρα. Δηλαδή αυτό, πιστεύω πάνω απ' όλα συνεργασία και θέληση. Ωραία, πάμε τώρα να δούμε και μέσα στο σχολείο. Ωραία, έχεις ακούσει τη λέξη κρίση, έτσι, τι πιστεύεις ότι σημαίνει. Κρίση, σε τι θέμα πάνω, απλά σαν λέξη. Ναι, σε σένα τι σε παραπαίνει, ας πούμε. Δεν ξέρω, μου φαίνεται κάτι, όχι αρνητικό, δεν ξέρω, κάτι πολύ σοβαρό αυτή η λέξη. Ωραία, πες μου τώρα, αν είσαι στο σχολείο, ποιο περιστατικό θα θεωρούσες σαν μια κρίση να είσαι στο σχολείο. Δεν ξέρω, μαλασέυγια γενικά από μαθητές και καθηγητές και το αντίθετο. Τι σημαίνει μια κρίση. Κρίση, αυτό που λες εννοεί, δηλαδή δεν επικοινωνούν καλά, δηλαδή δεν είναι γενικός ο τρόπος που επικοινωνούν. Ναι, αυτό εννοώ, αλλά σε κάποιες τάξεις συμβαίνει αυτό και δεν ξέρω, μπορώ να το λαμβάνω σαν κρίση αυτό. Αν είναι παρόμοιο για σένα, τροποιώνεις με τον ίδιο τρόπο όπως θα βίωνεις μια κρίση όπως την καταλαβαίνεις, ή μια οικονομική κρίση, ή μια κρίση όπως του COVID. Καταλαβαίνεις, αν είναι τόσο σημαντικό για σένα, δηλαδή νομίζεις ότι κάποιος δεν μπορεί να το διαχειριστεί μέσα στο σχολείο και αυτό δημιουργεί προβλήματα, ναι, είναι κρίση. Αλλά είναι σημαντικό για το σχολείο και γενικά σαν άνθρωπος, άμα δεν συνεργάζεσαι, πιστεύω θα είναι άσχημο. Αλλά δεν είναι όσο σοβαρό είναι η οικονομική κρίση του COVID ή οτιδήποτε άλλο, πιστεύω σε κάνει καλύτερο άνθρωπο να συνεργάζεσαι, να λέει την άποψή σου, να μπαίνεις σε ομάδες, αυτό. Τώρα, πόδος είναι άσχημα οι περιστατικά κρίσης στο σχολείο θεωρείς. Δεν ξέρω, πιστεύω πολλές. Αλλά είναι ανάλογα το σχολείο, ανάλογα τα παιδιά, το κλίμα. Αν γυρίσουμε λίγο και σε αυτά που λέγαμε υπερηφορισμού και λοιπά, αυτά τα περιστατικά πόσο συχνά γίνονται ας πούμε. Γίνονται πολύ συχνά. Αυτά γίνονται συχνά. Ναι. Πλέον στην Ελλάδα το ακούμε πολύ δυστυχώς και μακάρι κάποιος να φτιάξει αυτό το πράγμα γιατί κανείς δεν αξίζει να πιστεύει μπούλινγκ. Ούτε υπερηφορισμό, ούτε λεπτικό, ούτε το cyber μπούλινγκ, τίποτα. Αυτό. Στο δικό σου σχολείο γίνονται συχνά θεωρείς. Τώρα από μεγαλύτερα παιδιά πιστεύω γιατί ακούω πολλά. Δηλαδή μπορεί να μπαίνεις σε τσακομπούζια πολύ, δεν θα το πω χαζούς. Να το πω ποιος έμεινε. Πιο για σήμαντους λόγους. Για κάτι που δεν βοηθάει κάπου, είναι αχρίαστο. Αυτό. Δηλαδή γενικά συμβαίνει. Η αιτία που συμβαίνει είναι αυτό. Ποιοι επιστηρίζονται είναι αυτοί. Η φιλία, το χρώμα, τις σεξουαλικές παιδιά. Προτιμήσεις πάρα πολύ. Δηλαδή, γενικά στο σχολό μου, γίνεται αυτό το θέμα περί προτιμήσεις σεξουαλικές. Ναι. Αυτό είναι έντονο. Ναι, είναι πολύ έντονο. Αυτά γίνονται αντιληπτά από τους φαιδαστάριους, από τους καθηγητές και διευθυντής. Κάποιοι δεν ασχολούνται, κάποιοι αδιαφορούν, γιατί φοβούνται μην μπλέξουν με τέτοια θέματα ή θα τους διώξει στο σχολείο ή ότι θα το κρίνει ακατάλληλο. Ξέρω. Αυτό είναι. Πάθες νομίζεις ότι ο διευθυντής είναι ενημερωμένος. Ναι. Ότι είναι ενημερωμένος για κάποια πράγματα, αλλά εντάξει, όχι για όλα, γιατί κάτι κρύβονται. Κρύβονται πολύ ή το παιδί φοβάται να μιλήσει, οπότε δεν μπορεί κάποιος να ενημερωθεί γι' αυτό. Πιστεύεις ότι υπάρχουν στοιχεία που δεν λαμβάνουν υπόψη όταν γίνονται τέτοια πράγματα, δηλαδή για τα παιδιά ή τις συνθήκες που έχουν υποχήσει για ένα περιστατικό. Ναι, πιστεύω. Υπάρχουν περιστατικά που δεν τα γνωρίζουν οι καθηγητές ή οι γονείς. Και οι γονείς δεν ενημερώνονται, έτσι. Ωραία. Λοιπόν, τώρα, σε περίπτωση που θα γίνει κάτι και θα είναι λίγο πιο ακραίο, ας πούμε, για παράδειγμα, να υπάρχει ένας εφθόβισμος και να γίνει σωματικά, έτσι. Εσύ ποιον θα εμπιστευτείς για να πάρεις πληροφορίες για το τι έγινε και τι καθοδηγείς, ας πούμε, τι θα γίνει, τι μπορείς να κάνεις μετά. Άμα το παιδί που έλαβε το σωματικό εφθοβισμό είναι εντάξει και θέλει να μου μιλήσει γι' αυτό, γιατί δεν θέλω να τον πιέσω ή να την πιέσω, θα πάρω τις πληροφορίες από εκείνο, άμα δεν με εμπιστεύετε, και ανάλογα, άμα θέλει εκείνο να ενημερώσω, αλλιώς θα το κάνω λίγο, όχι, έμεσα, όπως λέγεται. Θα ενημερώσω κάποιον μεγαλύτερο, αλλά θα το κάνουμε κάπως να μην ενοχλείς το παιδί, ούτε να προκαλέσεις περισσότερο εφθοβισμό. Και με μεγαλύτερο, ποιον ενοχλείς καλύτερα, δηλαδή, θα στάνεις κάποιο παθηγητή, κάποιο αθλητή... Είναι ανάλογα ποιον εμπιστεύομαι και ποιον εμπιστεύεται το παιδί. Δηλαδή, μπορεί να εμπιστεύεται ένας αγαπημένος παθηγητής, ας πούμε, που να εμπιστεύεται περισσότερο και να μιλάει για τα προσωπικά, ας πούμε. Οπότε, θα αυτό. Οπότε, θα βοηθούσες κιόλας, έτσι, με το σπόσδος να βοηθήσεις. Μακάρι, δηλαδή, να μπορούσα να βοηθήσω παντού, αλλά... Τώρα, άρα, από αυτά που μου είπες, πώς αξιολογείς την αποτελεσματικότητα του σχολείου στο να διαχειρίζεται τέτοια περιστατικά. Μέτρια, πιστεύω. Δεν θα πω καθόλου κακή, αλλά ούτε και τέλεια. Δηλαδή, δεν έχουμε κανένα περιστατικό, ότι με το που γίνεται κάτι, το κόβουν. Ναι, ναι, ναι. Πιστεύω μέτρη. Τι θα έκανες διαφορετικά, τι θα έλεσες εσύ. Από το σχολείο μου ή γενικά. Όταν υπάρξει ένα τέτοιο περιστατικό, τι θα προσπαθούσες να κάνεις για να το ρίσεις. Να μάθω για ποιο λόγο το κάνει ο... Ας το πω τώρα. Όχι η εκφοβλή. Δεν ξέρω πώς θα το πω. Το δήμα εκφοβισμού, ναι. Ας πούμε, το παιδί που έχει υποστηρικό εκφοβισμό. Ναι. Αυτός που κάνει γούγλινγκ, ας πούμε. Για ποιο λόγο το κάνει. Δηλαδή, κάτι θα κρύβει. Κάτι θα λείπει από μέσα του. Και θα προσπαθήσω να συζητήσω. Τώρα, όταν δεν μπορεί να κάνει να συζητήσει, τότε... Δεν ξέρω. Θα πρέπει να απομακρυνθεί κάπως... Δεν ξέρω, αλήθεια δεν είναι. Άρα, δηλαδή, όταν γίνεται κάτι τέτοιο, οι δάσκαλοι, οι καθηγητές, μετά δεν πιάνουν το παιδί που το έκανε αυτό να συζητήσουν μαζί του. Ναι, το πιάνουν. Απλά κάποια παιδιά δεν συζητάνε. Δηλαδή, δεν το άξιζε. Το άξιζε επειδή ήταν, ας πούμε, διαφορετικό χρώμα. Και εντάξει, οι καθηγητές προσπαθούν να προσπαθούν, αλλά δεν αφήνουν το θέμα. Απλά, πώς το λένε, πηγαίνουν σε πεινές. Ναι. Για να καταλάβουν το παιδί. Και κάποιες φορές παίρνουν και γονείς για να συζητήσουν. Οι γονείς είναι πιο... Κάποιοι γονείς είναι πιο συζητήσιμα από τα παιδιά. Ναι, ναι, ναι. Τώρα, έχει γίνει κάποιο είδους επιμόρφωση για το πώς χειριζόμαστε τέτοιου είδους κρίσης με εκπομπισμό, με θέματα φίλους, στο σχολείο, κάποια ημερίδα, με ενημέρωση... Ναι, έχουν κάποιες ομάδες από... Πώς το θέσω τώρα... Από κάποιες σχολές έρχονται στις τάξεις και συζητάνε. Ανοίγουν και τον πίνακα κιόλας και μας δείχνουν κάτι... Αχ, πώς θα λένε τώρα... Σελίδες. Να μας ρωτάμε τι θα κάναμε σε αυτό το περιστατικό και ότι τι πρέπει να κάνουμε και ότι δεν πρέπει να πινόμαστε στον εαυτό μας, άμα δεν μπορούμε να το ξεπεράσουμε μόνοι μας. Γενικά πολλές φορές από όταν θυμάμαι τον εαυτό μου, από το δημοτικό, συνέχεια μας κάνουν για τον bullying, συνέχεια βλέπω αφήσεις κολλημένες στον τοίχο, αυτό. Υπάρχει και μες στη σειρά, είναι σωστό. Άρα, για τον bullying, κάποια άλλη κρίση, όχι έτσι, δηλαδή για αυτό που έλεγες, να έχουμε μία σχέση για παιδιά με διαφορετικό χρώμα, για το φύλλο, για ποια κορίτσια, αυτά, τέτοιες ενημερώσεις έχουν γίνει. Ναι, έχουν γίνει, γιατί είμαστε όλοι ίσοι και ότι επειδή, ας πούμε, είναι γυναίκα ή αγόριτη θα πρέπει να κρίνουμε, επειδή έχει διαφορετικό φύλλο, όλοι είμαστε άνθρωποι και ίσοι, εγώ αυτό πιστεύω. Και αυτό μας περνάνε, ευτυχώς, οι καθηγητές. Τώρα, λίγα άτομα έχω, ξέρω που λένε το αντίθετο και αυτό είναι κακό. Ναι, ναι. Τώρα, αν γίνεται μια τέτοια ίδιος κρίση, ας πούμε, στο σχολείο, τι θα σε ανησυχούσε ή τι θα φοβόσουν, δηλαδή, δύο παιδιά τσακωθούν, ή κάτι ασπρίσει μπροστά εσύ, τι θα σε ανησυχούσε περισσότερο. Να μην χτυπήσει κάποιον, δηλαδή να μην δεχτεί σωματικό εφόβισμα, ούτε λεκτικό, να μην το πειράξει το παιδί, ούτε να πέσει φυχολογικά, ούτε να κάνει κακό στον αυτό του ο ίδιος. Δηλαδή, όταν γυρίσει σπίτι θα λέει, α, εγώ έφτυγα, πρέπει κάπως να έχει βοήθεια. Και θα φοβόμουν αυτό, νομίζω, πάνω κάτω. Να μην κλειστεί στον αυτό του και μην κάνει κακό. Και μην, να μην, για να μιλήσει, να μιλήσει. Να ανοιχτεί. Γενικά, θα λύσετε η στάση ασφαλής στο σχολείο. Ναι. Ωραία. Τώρα, από κάποιο περιστατικό που γίνεσαι εσείς, μήθως, από ποιον έπαιρνε στις πληροφορίες για αυτό που είχε γίνει ακριβώς μπροστά. Από τα παιδιά τριγύρω, που τα περισσότερα παιδιά δεν παίρνουν θέση, απλά θέλουν να δουν θέαμα, πιστεύω. Δηλαδή, α, θα κόλλει αυτός με αυτόν, πάμε να δούμε, δεν θα κάνουμε τίποτα. Θα τους αφήσουμε να φλακωθούν, να βγάλουν τα μαλλιά τους. Ναι. Αυτό είναι πολύ κακό. Και γενικά έτσι γίνονται. Μαθαίνονται τα πράγματα μέσα από το κουτσοβολιό, δυστυχώς. Αλλά μαθαίνονται, δυστυχώς. Ναι, αλλά συνήθως τι πληροφορίες σου δίνουνε. Σου λένε και τον λόγο που έγινε κάτι, απλά τσακώνεται αυτός με αυτό, πώς, πώς. Ναι, μου δίνουν τον λόγο. Δηλαδή, άμα το ακούσουν ή είναι κοντινοί φίλοι, θα μαθευτεί ο λόγος. Τώρα, ποιο πιστεύεις ότι είναι το μεγαλύτερο εμπόδιο στο σχολείο να μπορέσει να το διαχειριστεί σαν κρίση αυτό. Μου είπες, ας πούμε, ότι υπάρχουν κάποιοι καθηγητές που δεν μπορεί να ενδιαφέρονται ή δεν θέλουν να μπλέξουν, έτσι. Τι άλλο μπορεί να φταίει που... Κακή συνεργασία γονιών και καθηγητών, θα πω. Δηλαδή, μπορεί ο καθηγητής να είναι πολύ πρόθυμος και καλό να τα συζητάει και απλά ο γονιός να σφασίζει. Το παιδί μου έχει δίκιο, καλά το έκανα. Ναι, κατάρρευα το κατάρρευα. Να μην μπορούν να συνεργαστούν. Ναι, κακή συνεργασία. Τώρα, ο χρόνος, δηλαδή η έλειψη χρόνου επηρεάζει στο πώς θα αντιμετωπίσουν κρίση στο σχολείο. Ναι, γιατί μπορεί αυτή τη στιγμή να γίνεται το bullying και να το αντιμετωπίσουν μετά από δέκα μήνες. Που το παιδί θα έχει καταστραφεί τελείως. Αυτό. Είναι πολύ κακή έλειψη χρόνου, αλλά είναι και κάποια παιδιά που... Πολύ συχνά γίνεται αυτό, δηλαδή. Να γίνεται κάτι τώρα και να αντιδρούνε πολύ αργότερα. Πάρα πολλές φορές. Και όχι μόνο σε αυτό. Σε πάρα πολλά θέματα υπάρχει έλειψη χρόνου. Ότι δεν γίνεται γρήγορα. Δηλαδή θυμούνται ένα περιστατικό μετά από τόσο καιρό. Και απλά μπορεί να έχει τελειώσει αυτό το περιστατικό και να το θυμούνται μετά από καιρό. Και αυτό γίνεται γιατί είναι πολύ απασχολημένοι, θεωρείς, έχουν άλλα πράγματα που τρέχουν. Ναι. Και ότι μπορεί να μην το θεωρούν σημαντικό εκείνη τη στιγμή, αλλά να το καταλάβουν πιο μετά στη ζωή τους. Παρ' όλα αυτά, λες, είναι σημαντικό να αντιμετωπίζεις το εκείνη τη στιγμή και το παιδί να μην μένει για πολύ καιρό με αυτό, χωρίς να έχει πριν μια λύση. Ναι. Ωραία. Ωραία. Εγώ θέλω να... Δεν έχω χρόνο. Πες μου, πες μου, πες μου. Απλά ήθελα νερό νιπή μου. Θα σου φέρει για την κοράκια σου Κάτσε να τα κλείσεις Ευχαριστώ πάρα πολύ Όχι τέτοιο λόγο πάμε Απλά δεν θέλω να κόβω με...`
  const [transc,setTransc]=useState("");
  return (
    <>
    <Navbar/>
    <Layout>
      <Button onClick={handleLogout}>LOG OUT</Button>
      <Welcome />
    </Layout>
      <TranscriptionContext.Provider value={{transc,setTransc}}>
        <Layout>
          <AudioTranscriber/>
        </Layout>
        {transc!=="" &&
          <Layout>
            <TranscriberSummary/>
          </Layout>
        }
        
      </TranscriptionContext.Provider>
    </>
    
  );
  
};

export default Dashboard;
