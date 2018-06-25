(function ($, ej, undefined) {
    var name, widgets;
    if (ej.locales.indexOf("frFR") < 0)
        ej.locales.push("frFR");
    $.fn.Locale_frFR = function (pluginName) {
        switch (pluginName) {
            case "ejAutocomplete":
                ej.Autocomplete.Locale = ej.Autocomplete.Locale || {};
                ej.Autocomplete.Locale["fr-FR"] = {
                    addNewText: "Ajouter un nouveau",
                    emptyResultText: "Pas de suggestions",
                    actionFailure: "Le champ spécifié n'existe pas dans la source de données donné",
                    watermarkText: " "
                };
                break;
            case "ejColorPicker":
                ej.ColorPicker.Locale = ej.ColorPicker.Locale || {};
                ej.ColorPicker.Locale["fr-FR"] = {
                    buttonText: {
                        apply: "Appliquer",
                        cancel: "Annuler",
                        swatches: "Échantillons"
                    },
                    tooltipText: {
                        switcher: "Commutateur",
                        addButton: "Ajouter une couleur",
                        basic: "De base",
                        monoChrome: "Monochrome",
                        flatColors: "Couleurs plates",
                        seaWolf: "Loup de mer",
                        webColors: "Couleurs Web",
                        sandy: "Sablonneux",
                        pinkShades: "Pink Shades",
                        misty: "Brumeux",
                        citrus: "Agrumes",
                        vintage: "Cru",
                        moonLight: "clair de lune",
                        candyCrush: "Candy Crush",
                        currentColor: "Couleur actuelle",
                        selectedColor: "Couleur sélectionnée"
                    },
                };
                break;
            case "ejCurrencyTextbox":
                ej.CurrencyTextbox.Locale = ej.CurrencyTextbox.Locale || {};
                ej.CurrencyTextbox.Locale["fr-FR"] = {
                    watermarkText: "entrer la valeur",
                };
                break;
            case "ejDatePicker":
                ej.DatePicker.Locale = ej.DatePicker.Locale || {};
                ej.DatePicker.Locale["fr-FR"] = {
                    watermarkText: "Sélectionner une date",
                    buttonText: "Aujourd'hui",
                };
                break;
            case "ejDateRangePicker":
                ej.DateRangePicker.Locale = ej.DateRangePicker.Locale || {};
                ej.DateRangePicker.Locale["fr-FR"] = {
                    ButtonText: {
                        apply: "Appliquer",
                        cancel: "Annuler",
                        reset: "Réinitialiser"
                    },
                    watermarkText: "Sélectionner une plage",
                    customPicker: "Sélecteur personnalisé",
                };
                break;
            case "ejDateTimePicker":
                ej.DateTimePicker.Locale = ej.DateTimePicker.Locale || {};
                ej.DateTimePicker.Locale["fr-FR"] = {
                    watermarkText: "Sélectionnez l'heure de la date",
                    buttonText: {
                        today: "Aujourd'hui",
                        timeNow: "C'est l'heure",
                        done: "Terminé",
                        timeTitle: "Temps"
                    },
                };
                break;
            case "ejDialog":
                ej.Dialog.Locale = ej.Dialog.Locale || {};
                ej.Dialog.Locale["fr-FR"] = {
                    tooltip: {
                        close: "Fermer",
                        collapse: "Effondrement",
                        restore: "Restaurer",
                        maximize: "Maximiser",
                        minimize: "Minimiser",
                        expand: "Développer",
                        unPin: "Détacher",
                        pin: "Épingle"
                    },
                    closeIconTooltip: "Fermer",
                };
                break;
            case "ejDropDownList":
                ej.DropDownList.Locale = ej.DropDownList.Locale || {};
                ej.DropDownList.Locale["fr-FR"] = {
                    emptyResultText: "Pas de suggestions,",
                    watermarkText: " ",
                };
                break;
            case "ejComboBox":
                ej.ComboBox.Locale["fr-FR"] = {
                    noRecordsTemplate: "Aucun enregistrement trouvé",
                    actionFailureTemplate: "La demande a échoué"
                };
                break;
            case "ejMenu":
                ej.Menu.Locale["fr-FR"] = {
                    titleText: "Menu"
                };
                break;
            case "ejCaptcha":
                ej.Captcha.Locale["fr-FR"] = {
                    placeHolderText: "Entrer le code indiqué",
                    CustomErrorMessage: "Captcha invalide"
                };
                break;
            case "ejExcelFilter":
                ej.ExcelFilter.Locale = ej.ExcelFilter.Locale || {};
                ej.ExcelFilter.Locale["fr-FR"] = {
                    SortNoSmaller: "Trier petit au plus grand",
                    SortNoLarger: "Trier grand au plus petit",
                    SortTextAscending: "Trier de A à Z",
                    SortTextDescending: "Trier Z à A",
                    SortDateOldest: "Trier par Le plus ancien",
                    SortDateNewest: "Trier par Date",
                    SortByColor: "Trier par couleur",
                    SortByCellColor: "Trier par Portable",
                    SortByFontColor: "Trier par Couleur de police",
                    FilterByColor: "Filtrer par couleur",
                    CustomSort: "Tri personnalisé",
                    FilterByCellColor: "Filtrer par Portable",
                    FilterByFontColor: "Filtrer par couleur de police",
                    ClearFilter: "Clair Filtrer",
                    NumberFilter: "Filtres numériques",
                    GuidFilter: "Filtres Gud",
                    TextFilter: "Filtres de texte",
                    DateFilter: "La date Filtres",
                    DateTimeFilter: "Date Heure Filtres",
                    SelectAll: "Sélectionner tout",
                    Blanks: "Blanks",
                    Search: "Chercher",
                    Showrowswhere: "Afficher les lignes où",
                    NumericTextboxWaterMark: "Entrer la valeur",
                    StringMenuOptions: [{ text: "Égal", value: "equal" }, { text: "Inequal", value: "notequal" }, { text: "Commence avec", value: "startswith" }, { text: "Se termine par", value: "endswith" }, { text: "contient", value: "contains" }, { text: "Filtre personnalisé", value: "customfilter" }],
                    NumberMenuOptions: [{ text: "Égal", value: "equal" }, { text: "Inequal", value: "notequal" }, { text: "Moins que", value: "lessthan" }, { text: "Inférieur ou equal", value: "lessthanorequal" }, { text: "Plus grand que", value: "greaterthan" }, { text: "Meilleur que ou equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtre personnalisé", value: "customfilter" }],
                    GuidMenuOptions: [{ text: "Égal", value: "equal" }, { text: "Inequal", value: "notequal" }, { text: "Filtre personnalisé", value: "customfilter" }],
                    DateMenuOptions: [{ text: "Égal", value: "equal" }, { text: "Inequal", value: "notequal" }, { text: "Moins que", value: "lessthan" }, { text: "Inférieur ou equal", value: "lessthanorequal" }, { text: "Plus grand que", value: "greaterthan" }, { text: "Meilleur que ou equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtre personnalisé", value: "customfilter" }],
                    DatetimeMenuOptions: [{ text: "Égal", value: "equal" }, { text: "Inequal", value: "notequal" }, { text: "Moins que", value: "lessthan" }, { text: "Inférieur ou equal", value: "lessthanorequal" }, { text: "Plus grand que", value: "greaterthan" }, { text: "Meilleur que ou equal", value: "greaterthanorequal" }, { text: "Entre", value: "between" }, { text: "Filtre personnalisé", value: "customfilter" }],
                    Top10MenuOptions: [{ text: "Haut", value: "top" }, { text: "Bas", value: "bottom" }],
                    title: "Filtre personnalisé",
                    PredicateAnd: "ET",
                    PredicateOr: "OU",
                    OK: "D'accord",
                    MatchCase: "Cas de correspondance",
                    Cancel: "Annuler",
                    NoResult: "Aucun résultat",
                    CheckBoxStatusMsg: "Pas tous les éléments montrant",
                    DatePickerWaterMark: "Sélectionner une date",
                    DateTimePickerWaterMark: "Sélectionnez date heure",
                    True: "vrai",
                    False: "faux",
                    AddToFilter: "Ajouter la sélection actuelle au filtre"
                };
                break;
            case "ejFileExplorer":
                ej.FileExplorer.Locale = ej.FileExplorer.Locale || {};
                ej.FileExplorer.Locale["fr-FR"] = {
                    Folder: "Dossier",
                    EmptyFolder: "Ce dossier est vide",
                    ProtectedFolder: "Vous ne possédez pas actuellement l'autorisation d'accéder à ce dossier",
                    EmptyResult: "Aucun élément ne correspond à votre recherche",
                    SortBy: "Trier par",
                    Selected: "choisi",
                    InvalidFileName: "Un nom de fichier ne peut contenir aucun des caractères suivants: \\/: *? \\ <> |",
                    ContextMenuSortBy: "Trier par",
                    Permission: "Autorisation",
                    Back: "En arrière",
                    Forward: "Vers l'avant",
                    Upward: "ascendant",
                    Refresh: "Rafraîchir",
                    Addressbar: "Barre d'adresse",
                    Upload: "Télécharger",
                    Rename: "Rebaptiser",
                    Delete: "Effacer",
                    Download: "Télécharger",
                    Error: "Erreur",
                    PasteError: "Erreur",
                    UploadError: "Erreur",
                    RenameError: "Erreur",
                    Cut: "Coupe",
                    Copy: "Copie",
                    Paste: "Pâte",
                    Details: "Détails",
                    Searchbar: "Barre de recherche",
                    Open: "Ouvert",
                    Search: "Chercher",
                    NewFolder: "Nouveau dossier",
                    Size: "Taille",
                    RenameAlert: "S'il vous plaît entrer un nouveau nom",
                    PasteReplaceAlert: "Le fichier nommé existe déjà. Remplacez l'ancien fichier par un nouveau?",
                    UploadReplaceAlert: "Le fichier nommé existe déjà. Remplacez l'ancien fichier par un nouveau?",
                    NewFolderAlert: "S'il vous plaît entrer un nouveau nom de dossier,",
                    ContextMenuOpen: "Ouvert",
                    ContextMenuNewFolder: "Nouveau dossier",
                    ContextMenuDelete: "Effacer",
                    ContextMenuRename: "Rebaptiser",
                    ContextMenuUpload: "Télécharger",
                    ContextMenuDownload: "Télécharger",
                    ContextMenuCut: "Coupe",
                    ContextMenuCopy: "Copie",
                    ContextMenuPaste: "Pâte",
                    ContextMenuGetinfo: "Informez-vous",
                    ContextMenuRefresh: "Rafraîchir",
                    ContextMenuOpenFolderLocation: "emplacement du dossier ouvert",
                    Item: "article",
                    Items: "articles",
                    GeneralError: "S'il vous plaît voir la fenêtre de la console de navigateur pour plus d'informations",
                    DeleteFolder: "Etes-vous sûr que vous voulez supprimer",
                    CancelPasteAction: "Le dossier de destination est un sous-dossier du dossier source.",
                    OkButton: "D'accord",
                    CancelButton: "Annuler",
                    YesToAllButton: "Oui à tout",
                    NoToAllButton: "Non à tous",
                    YesButton: "Oui",
                    NoButton: "Non",
                    SkipButton: "Sauter",
                    Grid: "Vue par grille",
                    Tile: "vue Tile",
                    LargeIcons: "Grandes icônes",
                    Name: "prénom",
                    Location: "Emplacement",
                    Type: "Type d'élément",
                    Layout: "Disposition",
                    Created: "Créé",
                    Accessed: "Accédé",
                    Modified: "Modifié",
                    DialogCloseToolTip: "Fermer",
                    UploadSettings: {
                        buttonText: {
                            upload: "Télécharger",
                            browse: "Feuilleter",
                            cancel: "Annuler",
                            close: "Fermer"
                        },
                        dialogText: {
                            title: "Boîte de téléchargement",
                            name: "prénom",
                            size: "Taille",
                            status: "statut"
                        },
                        dropAreaText: "Déposer des fichiers ou cliquer pour télécharger",
                        filedetail: "La taille du fichier est trop grand. S'il vous plaît sélectionner un fichier dans le format valide.",
                        denyError: "Fichiers avec des extensions #Extension ne sont pas autorisés.",
                        allowError: "Seuls les fichiers avec les extensions de #Extension sont autorisés.",
                        cancelToolTip: "Annuler",
                        removeToolTip: "Retirer",
                        retryToolTip: "Recommencez",
                        completedToolTip: "Terminé",
                        failedToolTip: "Échoué",
                        closeToolTip: "Fermer"
                    },
                };
                break;
            case "ejGantt":
                ej.Gantt.Locale = ej.Gantt.Locale || {};
                ej.Gantt.Locale["fr-FR"] = {
                    emptyRecord: "Aucun enregistrement à afficher",
                    unassignedTask: "Tâche non assignée",
                    alertTexts: {
                        indentAlert: "Il n'y a aucune trace de Gantt est sélectionné pour effectuer le retrait",
                        outdentAlert: "Il n'y a aucune trace de Gantt est sélectionné pour effectuer le retrait négatif",
                        predecessorEditingValidationAlert: "Cyclique dépendance survenu, S'il vous plaît Consultez le prédécesseur",
                        predecessorAddingValidationAlert: "Remplissez toutes les colonnes dans la table prédécesseur",
                        idValidationAlert: "Duplicate ID",
                        dateValidationAlert: "Invalid Date de fin",
                        dialogResourceAlert: "Remplissez toutes les colonnes du tableau des ressources"
                    },
                    columnHeaderTexts: {
                        taskId: "ID",
                        taskName: "Nom de la tâche",
                        startDate: "Date de début",
                        endDate: "Date de fin",
                        resourceInfo: "Ressources",
                        duration: "Durée",
                        status: "Progrès",
                        taskMode: "Mode tâche",
                        predecessor: "Prédécesseurs",
                        type: "Type",
                        offset: "Offset",
                        baselineStartDate: "Date de début de base",
                        baselineEndDate: "Baseline Date de fin",
                        WBS: "WBS",
                        WBSPredecessor: "WBS prédécesseur",
                        dialogCustomFieldName: "Nom de colonne",
                        dialogCustomFieldValue: "Valeur",
                        notes: "Remarques",
                        taskType: "type de tâche",
                        work: "Travail",
                        unit: "Unité",
                        effortDriven: "effort Driven",
                        resourceName: "Nom de la ressource"
                    },
                    editDialogTexts: {
                        addFormTitle: "Nouvelle tâche",
                        editFormTitle: "Modifier la tâche",
                        saveButton: "sauvegarder",
                        deleteButton: "Effacer",
                        cancelButton: "Annuler",
                        addPredecessor: "Ajouter un nouveau",
                        removePredecessor: "Retirer",
                        addButton: "Ajouter"
                    },
                    columnDialogTexts: {
                        field: "Champ",
                        headerText: "En-tête",
                        editType: "Modifier le type",
                        filterEditType: "Modifier le type de filtre",
                        allowFiltering: "Autoriser le filtrage",
                        allowFilteringBlankContent: "Autoriser le filtrage du contenu Blank",
                        allowSorting: "Autoriser tri",
                        visible: "Visible",
                        width: "Largeur",
                        textAlign: "Alignement du texte",
                        headerTextAlign: "Alignement du texte en-tête",
                        columnsDropdownData: "Colonne Chute de données vers le bas",
                        dropdownTableText: "Texte",
                        dropdownTableValue: "Valeur",
                        addData: "Ajouter",
                        deleteData: "Retirer",
                        allowCellSelection: "Autoriser la sélection de cellules",
                        clipMode: "Mode Clip",
                        tooltip: "Info-bulle",
                        showInColumnChooser: "Afficher dans le sélecteur de colonne",
                        headerTooltip: "Header Tooltip"
                    },
                    editTypeTexts: {
                        string: "Chaîne",
                        numeric: "Numérique",
                        datePicker: "Sélecteur de date",
                        dateTimePicker: "Date Time Picker",
                        dropdown: "Menu déroulant",
                        boolean: "Boolean"
                    },
                    textAlignTypes: {
                        right: "Droite",
                        left: "La gauche",
                        center: "centre"
                    },
                    clipModeTexts: {
                        clip: "Agrafe",
                        ellipsis: "Ellipse"
                    },
                    toolboxTooltipTexts: {
                        addTool: "Ajouter",
                        editTool: "modifier",
                        saveTool: "Mettre à jour",
                        deleteTool: "Effacer",
                        cancelTool: "Annuler",
                        searchTool: "Chercher",
                        indentTool: "tiret",
                        outdentTool: "Retrait négatif",
                        expandAllTool: "Développer tout",
                        collapseAllTool: "Réduire tout",
                        nextTimeSpanTool: "Suivant Timespan",
                        prevTimeSpanTool: "Précédent Timespan",
                        criticalPathTool: "Chemin critique",
                        excelExportTool: "Exportation Excel",
                        printTool: "Impression",
                        pdfExportTool: "Exportation PDF"
                    },
                    durationUnitTexts: {
                        days: "journées",
                        hours: "heures",
                        minutes: "minutes",
                        day: "journée",
                        hour: "heure",
                        minute: "minute"
                    },
                    durationUnitEditText: {
                        minute: ["m", "min", "minute", "minutes"],
                        hour: ["h", "hr", "heure", "heures"],
                        day: ["d", "dy", "journée", "journées"]
                    },
                    workUnitTexts: {
                        days: "journées",
                        hours: "heures",
                        minutes: "minutes"
                    },
                    taskTypeTexts: {
                        fixedWork: "travail fixe",
                        fixedUnit: "Unités fixes",
                        fixedDuration: "Durée fixe"
                    },
                    effortDrivenTexts: {
                        yes: "Oui",
                        no: "Non"
                    },
                    contextMenuTexts: {
                        taskDetailsText: "Détails de la tâche ...",
                        addNewTaskText: "Ajouter une nouvelle tâche",
                        indentText: "tiret",
                        outdentText: "Retrait négatif",
                        deleteText: "Effacer",
                        aboveText: "Au dessus de",
                        belowText: "Au dessous de"
                    },
                    newTaskTexts: {
                        newTaskName: "Nouvelle tâche"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Trier par ordre croissant",
                        sortDescendingText: "Trier par ordre décroissant",
                        columnsText: "colonnes",
                        insertColumnLeft: "Insérez la colonne de gauche",
                        insertColumnRight: "Insérez la colonne de droite",
                        deleteColumn: "Supprimer la colonne",
                        renameColumn: "Renommer la colonne"
                    },
                    taskModeTexts: {
                        manual: "Manuel",
                        auto: "Auto"
                    },
                    columnDialogTitle: {
                        insertColumn: "Insérer une colonne",
                        deleteColumn: "Supprimer la colonne",
                        renameColumn: "Renommer la colonne"
                    },
                    deleteColumnText: "Êtes-vous sûr de vouloir supprimer cette colonne?",
                    okButtonText: "D'accord",
                    cancelButtonText: "Annuler",
                    confirmDeleteText: "Confirmation de la suppression",
                    predecessorEditingTexts: {
                        fromText: "De",
                        toText: "À"
                    },
                    dialogTabTitleTexts: {
                        generalTabText: "Général",
                        predecessorsTabText: "Prédécesseurs",
                        resourcesTabText: "Ressources",
                        customFieldsTabText: "Les champs personnalisés",
                        notesTabText: "Remarques"
                    },
                    predecessorCollectionText: [
                            { id: "SS", text: "Démarrer-Démarrer", value: "Démarrer-Démarrer" },
                            { id: "SF", text: "Démarrer-terminer", value: "Démarrer-terminer" },
                            { id: "FS", text: "terminer-Démarrer", value: "terminer-Démarrer" },
                            { id: "FF", text: "terminer-terminer", value: "terminer-terminer" }
                    ],

                    linkValidationRuleText: {
                        taskBeforePredecessor: "Vous avez déplacé '{0}' pour commencer avant la fin de '{1}' et les deux tâches sont liées. Par conséquent, les liens ne peuvent pas être honorés. Sélectionnez une action ci-dessous pour effectuer",
                        taskAfterPredecessor: "Vous avez déplacé '{0}' loin de '{1}' et les deux tâches sont liées. Par conséquent, les liens ne peuvent pas être honorés. Sélectionnez une action ci-dessous pour effectuer",
                    },
                    linkValidationDialogTitle: "Valider l'édition",
                    linkValidationRuleOptions: {
                        cancel: "Annuler, Conserver le lien existant",
                        removeLink: "Supprimez le lien et déplacez '{0}' pour commencer sur '{1}'.",
                        preserveLink: "Déplacez le '{0}' pour commencer sur '{1}' et gardez le lien."
                    },
                    connectorLineDialogText: {
                        from: "De",
                        to: "À",
                        taskLink: "Lien de tâche",
                        lag: "calorifuger",
                        okButtonText: "D'accord",
                        cancelButtonText: "Annuler",
                        deleteButtonText: "Effacer",
                        title: "Dépendance de tâche"
                    }
                };
                break;
            case "ejGrid":
                ej.Grid.Locale = ej.Grid.Locale || {};
                ej.Grid.Locale["fr-FR"] = {
                    EmptyRecord: "Aucun enregistrement à afficher",
                    GroupDropArea: "Faites glisser un en-tête de colonne ici pour groupe sa colonne",
                    DeleteOperationAlert: "Aucun enregistrements sélectionnés pour l'opération de suppression",
                    EditOperationAlert: "Aucun enregistrements sélectionnés pour l'opération d'édition",
                    SaveButton: "sauvegarder",
                    OKButton: "D'accord",
                    CancelButton: "Annuler",
                    EditFormTitle: "Les détails de ",
                    AddFormTitle: "Ajouter un nouvel enregistrement",
                    GroupCaptionFormat: "{{:headerText}}: {{:key}} - {{:count}} {{if count == 1 }} article {{else}} articles {{/if}} ",
                    BatchSaveConfirm: "Etes-vous sûr que vous voulez enregistrer les modifications?",
                    BatchSaveLostChanges: "Les modifications non enregistrées seront perdues. Es-tu sur de vouloir continuer?",
                    ConfirmDelete: "Etes-vous sûr de vouloir supprimer le registre?",
                    CancelEdit: "Etes-vous sûr que vous voulez annuler les modifications?",
                    PagerInfo: "{0} sur {1} pages ({2} articles)",
                    FrozenColumnsViewAlert: "colonnes congelés doivent être dans la zone gridview",
                    FrozenColumnsScrollAlert: "Activer permettre le défilement, tout en utilisant des colonnes congelés",
                    FrozenNotSupportedException: "Les colonnes et les lignes figées sont pas pris en charge pour le regroupement, modèle Row, modèle de Détail, Hiérarchie Grid et Batch Édition",
                    Add: "Ajouter",
                    Edit: "modifier",
                    Delete: "Effacer",
                    Update: "Mettre à jour",
                    Cancel: "Annuler",
                    Done: "Terminé",
                    Columns: "colonnes",
                    SelectAll: "(Sélectionner tout)",
                    PrintGrid: "Impression",
                    ExcelExport: "Excel Export",
                    WordExport: "parole Export",
                    PdfExport: "PDF Export",
                    StringMenuOptions: [{ text: "Commence avec", value: "StartsWith" }, { text: "Se termine par", value: "EndsWith" }, { text: "contient", value: "Contains" }, { text: "Égal", value: "Equal" }, { text: "Inequal", value: "NotEqual" }],
                    NumberMenuOptions: [{ text: "Moins que", value: "LessThan" }, { text: "Plus grand que", value: "GreaterThan" }, { text: "Inférieur ou equal", value: "LessThanOrEqual" }, { text: "Meilleur que ou equal", value: "GreaterThanOrEqual" }, { text: "Égal", value: "Equal" }, { text: "Inequal", value: "NotEqual" }, { text: "Entre", value: "Between" }],
                    PredicateAnd: "ET",
                    PredicateOr: "OU",
                    Filter: "Filtre",
                    FilterMenuCaption: "Valeur du filtre",
                    FilterMenuFromCaption: "De",
                    FilterMenuToCaption: "À",
                    FilterbarTitle: "s bar filtre cellulaire",
                    MatchCase: "Cas de correspondance",
                    Clear: "Clair",
                    ResponsiveFilter: "Filtre",
                    ResponsiveSorting: "Trier",
                    Search: "Chercher",
                    NumericTextBoxWaterMark: "Entrer la valeur",
                    DatePickerWaterMark: "Sélectionner une date",
                    EmptyDataSource: "DataSource doit pas être vide au chargement initial car les colonnes sont générés à partir dataSource dans AutoGénéré Colonne Grille",
                    ForeignKeyAlert: "La valeur mise à jour devrait être une valeur de clé étrangère valide",
                    True: "vrai",
                    False: "faux",
                    UnGroup: "Cliquez ici pour dégrouper",
                    AddRecord: "Ajouter un enregistrement",
                    EditRecord: "edit Record",
                    DeleteRecord: "supprimer l'enregistrement",
                    Save: "sauvegarder",
                    Grouping: "Groupe",
                    Ungrouping: "Dissocier",
                    SortInAscendingOrder: "Tri par ordre croissant",
                    SortInDescendingOrder: "Trier par ordre décroissant",
                    NextPage: "Page suivante",
                    PreviousPage: "page précédente",
                    FirstPage: "Première page",
                    LastPage: "Dernière page",
                    EmptyRowValidationMessage: "Au moins un champ doit être mis à jour",
                    NoResult: "Aucun résultat"
                };
                break;
            case "ejmobile":
                if (ej.mobile.Grid) {
                    ej.mobile.Grid.Locale = ej.mobile.Grid.Locale || {};
                    ej.mobile.Grid.Locale["fr-FR"] = {
                        emptyResult: "Aucun enregistrement à afficher",
                        filterValidation: "Entrer les données de filtre valide",
                        filterTypeValidation: "Entrer les données de filtrage valides. La colonne actuelle du filtre est de type",
                        captionText: "Articles",
                        spinnerText: "chargement...",
                        HideColumnAlert: "Au moins une colonne doit être affichée dans la grille",
                        columnSelectorText: "Masquer la Colonne",
                        columnSelectorDone: "D'accord",
                        columnSelectorCancel: "Annuler",
                        columnSelectorWarning: "Attention",
                        filterOk: "D'accord",
                        filterWarning: "Attention"
                    };
                    ;
                }
                if (ej.mobile.DatePicker) {
                    ej.mobile.DatePicker.Locale = ej.mobile.DatePicker.Locale || {};
                    ej.mobile.DatePicker.Locale["fr-FR"] = {
                        confirmText: "Terminé",
                        Windows: {
                            cancelText: "Annuler",
                            headerText: "Choisissez une date",
                            toolbarConfirmText: "terminé",
                            toolbarCancelText: "Fermer"
                        },
                    };
                    ;
                }
                if (ej.mobile.TimePicker) {
                    ej.mobile.TimePicker.Locale = ej.mobile.TimePicker.Locale || {};
                    ej.mobile.TimePicker.Locale["fr-FR"] = {
                        confirmText: "Terminé",
                        AM: "UN M",
                        PM: "PM",
                        Android: {
                            headerText: "Régler le temps"
                        },
                        Windows: {
                            cancelText: "Annuler",
                            headerText: "CHOISIR LE TEMPS",
                            toolbarCancelText: "Fermer",
                            toolbarConfirmText: "terminé"
                        },
                    };

                }
                break;
            case "ejNumericTextbox":
                ej.NumericTextbox.Locale = ej.NumericTextbox.Locale || {};
                ej.NumericTextbox.Locale["fr-FR"] = {
                    watermarkText: "entrer la valeur",
                };
                break;
            case "ejPivotChart":
                ej.PivotChart.Locale = ej.PivotChart.Locale || {};
                ej.PivotChart.Locale["fr-FR"] = {
                    Measure: "Mesure",
                    Row: "Rangée",
                    Column: "Colonne",
                    Value: "Valeur",
                    Expand: "Développer",
                    Collapse: "Effondrement",
                    Exit: "Sortie",
                    ChartTypes: "Les types de graphique",
                    TDCharts: "Les graphiques 3D",
                    Tooltip: "Info-bulle",
                    Exporting: "L'exportation",
                    Line: "Ligne",
                    Spline: "spline",
                    Area: "Région",
                    SplineArea: "spline Area",
                    StepLine: "étape ligne",
                    StepArea: "étape Area",
                    Pie: "Tarte",
                    Bar: "Bar",
                    StackingArea: "Stacking Area",
                    StackingColumn: "Colonne d'empilage",
                    StackingBar: "Barre d'empilage",
                    Pyramid: "Pyramide",
                    Funnel: "Entonnoir",
                    Doughnut: "Donut",
                    Scatter: "dispersion",
                    Bubble: "Bubble",
                    TreeMap: "Carte d'arbres",
                    ColumnTD: "Column 3D",
                    PieTD: "Tarte 3D",
                    BarTD: "Bar 3D",
                    StackingBarTD: "Barre d'empilage 3D",
                    StackingColumnTD: "Colonne d'empilage 3D",
                    Excel: "Excel",
                    Word: "Mot",
                    Pdf: "PDF",
                    PNG: "PNG",
                    EMF: "EMF",
                    GIF: "GIF",
                    JPG: "JPG",
                    BMP: "BMP",
                    ZoomIn: "agrandir",
                    ZoomOut: "Dézoomer",
                    Legend: "Légende",
                    SmartLabels: "Étiquettes intelligentes",
                    Interactions: "Interactions médicamenteuses",
                    Zooming: "Zoom",
                    Rotate45: "Tourner45",
                    Rotate90: "Tourner90",
                    Trim: "Réduire",
                    MultipleRows: "Lignes multiples",
                    Wrap: "Emballage",
                    Hide: "Cacher",
                    WrapByWord: "Envelopper par mot",
                    CrossHair: "Cheveux croisés",
                    TrackBall: "Ballon de piste",
                    DisableTD: "Désactiver les graphiques 3D",
                    None: "Aucun",
                    Exception: "Exception",
                    OK: "D'accord"
                };
                break;
            case "ejPivotClient":
                ej.PivotClient.Locale = ej.PivotClient.Locale || {};
                ej.PivotClient.Locale["fr-FR"] = {
                    ClearSorting: "Tri clair",
                    ClearFilterFrom: "Effacer le filtre de",
                    SortAtoZ: "Trier de A à Z",
                    SortZtoA: "De Z à A Tri",
                    DoesNotBeginsWith: "N'a pas commence par",
                    DoesNotEndsWith: "Ne se termine par",
                    DoesNotContains: "Ne contient",
                    DoesNotEquals: "N'est pas égaux",
                    IsGreaterThan: "Est supérieure à",
                    IsGreaterThanOrEqualTo: "Est supérieure ou égale à",
                    IsLessThan: "Est inférieure à",
                    IsLessThanOrEqualTo: "Est inférieure ou égale à",
                    NoReports: "Pas de rapports trouvés dans DB",
                    Sort: "Tri",
                    SelectField: "sélectionnez Champ",
                    LabelFilterLabel: "Afficher les éléments pour lesquels l'étiquette",
                    ValueFilterLabel: "Afficher les éléments pour lesquels",
                    LabelFilters: "Filtres d'étiquetage",
                    BeginsWith: "Commence par",
                    NotBeginsWith: "Non Commence pa",
                    EndsWith: "se termine par",
                    NotEndsWith: "Non termine avec",
                    Contains: "Contient",
                    NotContains: "Ne contient pas",
                    ValueFilters: "Filtres de valeur",
                    ClearFilter: "Clear Filter",
                    Equals: "Equals",
                    NotEquals: "Not Equals",
                    GreaterThan: "Supérieur",
                    GreaterThanOrEqualTo: "supérieur ou égal à",
                    LessThan: "Less Than",
                    LessThanOrEqualTo: "Moins ou égal à",
                    Between: "Entre",
                    NotBetween: "Non Entre",
                    Top10: "Haut de page Count",
                    DeferUpdate: "Différer Update",
                    AddToColumn: "Ajouter à la colonne",
                    AddToRow: "Ajouter à la rangée",
                    AddToSlicer: "Ajouter à Slicer",
                    ReportList: "Liste des rapports",
                    Close: "Fermer",
                    DeferUpdate: "Reporter la mise à jour",
                    MDXQuery: "requêtes MDX",
                    Row: "Rangée",
                    Slicer: "Slicer",
                    CubeSelector: "Sélecteur cube",
                    ReportName: "Nom du rapport",
                    NewReport: "Nouveau rapport",
                    CubeDimensionBrowser: "Navigateur Cube Dimension",
                    AddReport: "Ajouter un rapport",
                    RemoveReport: "Retirer Rapport",
                    CannotRemoveSingleReport: "Impossible de supprimer le rapport unique",
                    AreYouSureToDeleteTheReport: "Êtes-vous sûr de vouloir supprimer le rapport",
                    RenameReport: "renommez Rapport",
                    ChartTypes: "Types de graphiques",
                    ToggleAxis: "Basculer Axis",
                    ExportToExcel: "Exporter vers Excel",
                    ExportToWord: "Exporter vers Word",
                    ExportToPdf: "Exporter au format PDF",
                    FullScreen: "Plein écran",
                    Grid: "la grille",
                    Chart: "Graphique",
                    OK: "D'accord",
                    Cancel: "Annuler",
                    MeasureEditor: "mesurer Editor",
                    MemberEditor: "Sous la direction de membres",
                    Measures: "Les mesures",
                    SortOrFilterColumn: "Trier / Filtre (colonne)",
                    SortOrFilterRow: "Trier / Filtre (Row)",
                    SortingAndFiltering: "Tri et le filtrage",
                    Sorting: "Tri",
                    Measure: "<U> M </ u> mesure",
                    Order: "Commande",
                    Filtering: "Filtration",
                    Condition: "C <u> o </ u> ndition",
                    PreserveHierarchy: "P <u> r </ u> ÉSERVE Hiérarchie",
                    Ascending: "<U> A </ u> croissant",
                    Descending: "D <u> e </ u> croissant",
                    Enable: "E <u> n </ u> mesure",
                    Disable: "D <u> i </ u> sable",
                    and: "<U> a </ u> e",
                    Line: "Ligne",
                    Spline: "spline",
                    Column: "Colonne",
                    Area: "Région",
                    SplineArea: "spline Area",
                    StepLine: "étape ligne",
                    StepArea: "étape Area",
                    Pie: "Tarte",
                    Bar: "Bar",
                    StackingArea: "Stacking Area",
                    StackingColumn: "Colonne d'empilage",
                    StackingBar: "Stacking Bar",
                    Pyramid: "Pyramide",
                    Funnel: "Entonnoir",
                    Doughnut: "Donut",
                    Scatter: "dispersion",
                    Bubble: "Bubble",
                    TreeMap: "Carte d'arbres",
                    Alert: "Alert",
                    MDXAlertMsg: "Veuillez ajouter une mesure, dimension ou de hiérarchie dans un axe approprié pour afficher la requête MDX.",
                    FilterSortRowAlertMsg: "On ne trouve pas dans la dimension de l'axe de rang. Veuillez ajouter la dimension élément de la ligne de tri axe/filtrage.",
                    FilterSortColumnAlertMsg: "On ne trouve pas dans la dimension de l'axe de la colonne. Veuillez ajouter la dimension de l'axe de l'élément dans la colonne de tri et de filtrage.",
                    FilterSortcolMeasureAlertMsg: "Veuillez ajouter à la mesure de l'axe de la colonne",
                    FilterSortrowMeasureAlertMsg: "Veuillez ajouter à la mesure de l'axe de rang",
                    FilterSortElementAlertMsg: "Élément non trouvé dans l'axe de la colonne. Veuillez ajouter un élément dans l'axe de la colonne pour trier/filtrage.",
                    FilterMeasureSelectionAlertMsg: "Veuillez sélectionner une mesure valide.",
                    FilterConditionAlertMsg: "Veuillez définir une condition valide.",
                    FilterStartValueAlertMsg: "Veuillez définir une valeur de départ.",
                    FilterEndValueAlertMsg: "Veuillez définir une valeur de fin.",
                    FilterInvalidAlertMsg: "Opération non valide !",
                    SelectRecordAlertMsg: "Veuillez sélectionner un enregistrement valide.",
                    RecordName: "Nom d'enregistrement",
                    RemoveRecord: "Effacer l'enregistrement",
                    RenameRecord: "L'enregistrement de nom",
                    Load: "Charger",
                    Remove: "Déposer",
                    Save: "Sauvegarder",
                    SaveAs: "Enregistrer sous",
                    SelectRecord: "Sélectionnez Enreg.",
                    SelectReport: "Sélectionnez Rapport",
                    DBReport: "La manipulation en DB Rapport",
                    Rename: "Renommer",
                    Remove: "Déposer",
                    SetRecordNameAlertMsg: "Veuillez définir nom d'enregistrement.",
                    SetReportNameAlertMsg: "Veuillez définir le nom du rapport.",
                    Search: "Recherchez",
                    MultipleItems: "Plusieurs éléments",
                    All: "Tous les",
                    CalculatedMember: "Membre calculé",
                    Caption: "Légende :",
                    Expression: "L'expression :",
                    MemberType: "Type de membre :",
                    FormatString: "Chaîne de format :",
                    MultipleMeasure: "Plus d'une mesure ne peut pas être tranché.",
                    DuplicateCalcMeasure: "Membre calculé avec le même nom existe déjà.",
                    EmptyField: "Nom de membres calculés ou expression ne peut pas être vide.",
                    EmptyFormat: "Chaîne de format pour membre calculé est vide.",
                    Warning: "Attention",
                    Confirm: "Membre calculé avec le même nom existe déjà. En raison de vouloir le remplacer ?",
                    KPIs: "KPI",
                    Collection: "Collection",
                    Report: "rapport",
                    AddCurrentSelectionToFilter: "Ajouter la sélection actuelle au filtre",
                    SaveMsg: "Rapport enregistré avec succès ! ! !",
                    RenameMsg: "Rapport renommé avec succès ! ! !",
                    RemoveMsg: "Rapport retiré avec succès ! ! !",
                    Success: "Succès",
                    KpiAlertMsg: "Le domaine vous êtes déménagement ne peut pas être placé dans ce domaine du rapport",
                    NotAllItemsShowing: "Pas tous les noeuds enfants sont affichés",
                    EditorLinkPanelAlert: "Les membres a plus de 1000 points à l'un ou plusieurs de ses parents. Seuls les 1000 premiers éléments sont affichés sous chaque parent.",
                    NamedSetAlert: "Un ensemble nommé ne peut pas être ajouté au rapport PivotTable en même temps qu'un autre ensemble nommé basé sur le même domaine. Cliquez sur OK pour supprimer ' <Set 1> ' ensemble nommé et ajouter ' <Set 2> ' ensemble nommé.",
                    Exception: "Exception"
                };
                break;
            case "ejPivotGauge":
                ej.PivotGauge.Locale = ej.PivotGauge.Locale || {};
                ej.PivotGauge.Locale["fr-FR"] = {
                    RevenueGoal: "Revenu But",
                    RevenueValue: "Revenu Valeur",
                    Exception: "Exception"
                };
                break;
            case "ejPager":
                ej.Pager.Locale = ej.Pager.Locale || {};
                ej.Pager.Locale["fr-FR"] = {
                    pagerInfo: "{0} sur {1} pages ({2} articles)",
                    firstPageTooltip: "Aller à la première page",
                    lastPageTooltip: "Aller à la dernière page",
                    nextPageTooltip: "Aller à la page suivante",
                    previousPageTooltip: "Aller à la page précédente",
                    nextPagerTooltip: "Aller à la page suivante",
                    previousPagerTooltip: "Aller à la page précédente",
                };
                break;
            case "ejPdfViewer":
                ej.PdfViewer.Locale = ej.PdfViewer.Locale || {};
                ej.PdfViewer.Locale["fr-FR"] = {
                    toolbar: {
                        print: {
                            headerText: "Impression",
                            contentText: "Imprimer le document PDF."
                        },
                        first: {
                            headerText: "Premier",
                            contentText: "Aller à la première page du document PDF."
                        },
                        previous: {
                            headerText: "précédent",
                            contentText: "Aller à la page précédente du document PDF."
                        },
                        next: {
                            headerText: "Prochain",
                            contentText: "Aller à la page suivante du document PDF."
                        },
                        last: {
                            headerText: "Dernier",
                            contentText: "Aller à la dernière page du document PDF."
                        },
                        zoomIn: {
                            headerText: "Agrandir",
                            contentText: "Un zoom sur le document PDF."
                        },
                        zoomOut: {
                            headerText: "Dézoomer",
                            contentText: "Zoom sur le document PDF."
                        },
                        pageIndex: {
                            headerText: "Numéro de page",
                            contentText: "Numéro de la page à afficher."
                        },
                        zoom: {
                            headerText: "Zoom",
                            contentText: "Zoom avant ou arrière sur le document PDF."
                        },
                        fitToWidth: {
                            headerText: 'Ajuster à la largeur',
                            contentText: 'Monter la page PDF à la largeur du conteneur .'
                        },
                        fitToPage: {
                            headerText: 'Ajuster à la page',
                            contentText: 'Monter la page PDF pour le conteneur .'
                        },
                        download: {
                            headerText: 'Télécharger',
                            contentText: 'Télécharger le document PDF.'
                        },
                        search: {
                            headerText: 'Recherche texte',
                            contentText: 'Recherche texte dans les pages PDF.'
                        },
                        highlight: {
                            headerText: 'surligné Texte',
                            contentText: 'Sélectionnez le texte dans les pages PDF.',
                        },
                        strikeout: {
                            headerText: 'StrikeOut Text',
                            contentText: 'StrikeOut Texte dans les pages PDF.',
                        },
                        underline: {
                            headerText: 'Souligner le texte',
                            contentText: 'Souligner le texte dans les pages PDF.',
                        },
                        signature: {
                            headerText: 'Signature',
                            contentText: 'Ajoutez ou créez la signature manuscrite.',
                        },
                        select: {
                            headerText: 'Sélection',
                            contentText: 'Outil de sélection pour le texte.',
                        },
                        scroll: {
                            headerText: 'Panning',
                            contentText: 'Cliquez pour faire pivoter le document',
                        },
                    },
                    contextMenu: {
                        copy: {
                            contentText: 'Copie',
                        },
                        googleSearch: {
                            contentText: 'Rechercher google',
                        },
                        Find: {
                            contentText: 'Trouver:',
                        },
                        matchCase: {
                            contentText: 'cas de correspondance',
                        },
                        auto: {
                            contentText: 'Auto',
                        },
                        openPopup: {
                            contentText: 'OpenPopup',
                        },
                        Delete: {
                            contentText: 'effacer',
                        },
                        properties: {
                            contentText: 'Propriétés....',
                        },
                    },
                    propertyWindow: {
                        underlineProperties: {
                            contentText: "OnderstreepProperties"
                        },
                        strikeOutProperties: {
                            contentText: "StrikeOutProperties"
                        },
                        highlightProperties: {
                            contentText: "HighlightProperties"
                        },
                        signatureProperties: {
                            contentText: "SignatureProperties"
                        },
                        appearance: {
                            contentText: "apparence"
                        },
                        general: {
                            contentText: "général"
                        },
                        color: {
                            contentText: "Couleur:"
                        },
                        opacity: {
                            contentText: "opacité:"
                        },
                        author: {
                            contentText: "auteur:"
                        },
                        subject: {
                            contentText: "assujettir:"
                        },
                        modified: {
                            contentText: "modifié:"
                        },
                        ok: {
                            contentText: "D'accord"
                        },
                        cancel: {
                            contentText: "Annuler"
                        },
                        locked: {
                            contentText: "fermé à clef"
                        }
                    },
                    signatureWindow: {
                        Signature: {
                            contentText: "Ajouter une signature"
                        },
                        Add: {
                            contentText: "Ajouter"
                        },
                        clear: {
                            contentText: "Clair"
                        },
                    },
                    waitingPopup: {
                        print: {
                            contentText: "Préparation du document pour l'impression ..."
                        }
                    }
                };
                break;
            case "ejPercentageTextbox":
                ej.PercentageTextbox.Locale = ej.PercentageTextbox.Locale || {};
                ej.PercentageTextbox.Locale["fr-FR"] = {
                    watermarkText: "entrer la valeur",
                };
                break;
            case "ejPivotGrid":
                ej.PivotGrid.Locale = ej.PivotGrid.Locale || {};
                ej.PivotGrid.Locale["fr-FR"] = {
                    Total: "Total",
                    GrandTotal: "Grand Total",
                    DoesNotBeginsWith: "N'a pas commence par",
                    DoesNotEndsWith: "Ne se termine par",
                    DoesNotContains: "Ne contient",
                    DoesNotEquals: "N'est pas égaux",
                    IsGreaterThan: "Est supérieure à",
                    IsGreaterThanOrEqualTo: "Est supérieure ou égale à",
                    IsLessThan: "Est inférieure à",
                    IsLessThanOrEqualTo: "Est inférieure ou égale à",
                    ClearSorting: "Tri clair",
                    ClearFilterFrom: "Effacer le filtre de",
                    SortAtoZ: "Trier de A à Z",
                    SortZtoA: "De Z à A Tri",
                    and: "<U> a </ u> e",
                    NumberFormatting: "Formatage des chiffres",
                    FrozenHeaders: "En-têtes congelé",
                    CellSelection: "Sélection de cellules",
                    CellContext: "Contexte cellulaire",
                    ColumnResize: "Redimensionner la colonne",
                    Layouts: "Les modèles",
                    NormalLayout: "Disposition normale",
                    NormalTopSummary: "Présentation NormalTopSummary",
                    NoSummaries: "Présentation NoSummaries",
                    ExcelLikeLayout: "Comme la mise en page d'Excel",
                    FrozenHeader: "En-tête congelée",
                    AdvancedFiltering: "Filtrage avancé",
                    Amount: "Quantité",
                    Quantity: "Quantité",
                    Measures: "Mesures visant",
                    NumberFormats: "Les formats de nombre",
                    Exporting: "L'exportation",
                    FileName: "Nom de fichier",
                    ToolTip: "Extrémité de l'outil",
                    RTL: "RTL",
                    CollapseByDefault: "Par défaut l'effondrement",
                    EnableDisablePaging: "Enalbe / Désactiver la pagination",
                    PagingOptions: "Options d'appel",
                    CategoricalPageSize: "Taille de page catégorique",
                    SeriesPageSize: "Taille de page série",
                    HyperLink: "Hyper Link",
                    CellEditing: "Montage de cellules",
                    GroupingBar: "Bar de groupement",
                    SummaryCustomization: "Personnalisation Sommaire",
                    SummaryTypes: "Types Sommaire",
                    SummaryType: "Type de statistique",
                    EnableRowHeaderHyperlink: "Activer l'en-tête de ligne HyperLink",
                    EnableColumnHeaderHyperlink: "Activer l'en-tête de colonne HyperLink",
                    EnableValueCellHyperlink: "Activer la cellule Valeur HyperLink",
                    EnableSummaryCellHyperlink: "Activer la cellule de synthèse HyperLink",
                    HideGrandTotal: "Masquer Grand Total",
                    HideSubTotal: "Masquer Sous-total",
                    Both: "Les deux",
                    Sum: "Somme",
                    Average: "La moyenne",
                    Count: "Count",
                    Min: "Min",
                    Max: "Max",
                    Excel: "Excel",
                    Word: "Word",
                    PDF: "PDF",
                    CSV: "CSV",
                    Sort: "Tri",
                    SelectField: "sélectionnez Champ",
                    LabelFilterLabel: "Afficher les éléments pour lesquels l'étiquette",
                    ValueFilterLabel: "Afficher les éléments pour lesquels",
                    LabelFilters: "Filtres d'étiquetage",
                    BeginsWith: "Commence par",
                    NotBeginsWith: "Non Commence pa",
                    EndsWith: "se termine par",
                    NotEndsWith: "Non termine avec",
                    Contains: "Contient",
                    NotContains: "Ne contient pas",
                    ValueFilters: "Filtres de valeur",
                    ClearFilter: "Clear Filter",
                    Equals: "Equals",
                    NotEquals: "Not Equals",
                    GreaterThan: "Supérieur",
                    GreaterThanOrEqualTo: "supérieur ou égal à",
                    LessThan: "Less Than",
                    LessThanOrEqualTo: "Moins ou égal à",
                    Between: "Entre",
                    NotBetween: "Non Entre",
                    AddToFilter: "Ajouter à filtre",
                    AddToRow: "Ajouter à la rangée",
                    AddToColumn: "Ajouter à la colonne",
                    AddToValues: "Ajouter aux valeurs",
                    Warning: "Avertissement",
                    Error: "Error",
                    GroupingBarAlertMsg: "Le champ que vous déplacez ne peut pas être placé dans cette zone du rapport",
                    Measures: "Mesures",
                    Expand: "Développer",
                    Collapse: "Réduire",
                    ToolTipRow: "Rangée",
                    ToolTipColumn: "Colonne",
                    ToolTipValue: "Valeur",
                    NoValue: "Pas de valeu",
                    SeriesPage: "Series Page",
                    CategoricalPage: "Catégorique page",
                    DragFieldHere: "champ de glisser ic",
                    ColumnArea: "Drop colonne ici",
                    RowArea: "Drop ligne ic",
                    ValueArea: "Lâche valeurs ici",
                    Close: "Fermer",
                    OK: "OK",
                    Cancel: "Annuler",
                    Remove: "Supprimer",
                    Goal: "Goal",
                    Status: "Status",
                    Trend: "Trend",
                    Value: "value",
                    ConditionalFormattingErrorMsg: "La valeur donnée ne correspond pas",
                    ConditionalFormattingConformMsg: "Etes-vous sûr de vouloir supprimer le format sélectionné?",
                    EnterOperand1: "Entrez Opérande1",
                    EnterOperand2: "Entrez Opérande2",
                    ConditionalFormatting: "Mise en forme conditionnelle",
                    Condition: "Type conditionnel",
                    Value1: "Value1",
                    Value2: "Value2",
                    Editcondition: "Modifier Condition",
                    AddNew: "Ajouter",
                    Format: "Format",
                    Backcolor: "Back Color",
                    Borderrange: "Border Range",
                    Borderstyle: "Border Style",
                    Fontsize: "Font Size",
                    Fontstyle: "aille de la police",
                    Bordercolor: "Couleur Bordure",
                    AliceBlue: "AliceBlue",
                    Black: "Black",
                    Blue: "Blue",
                    Brown: "Brown",
                    Gold: "Gold",
                    Green: "Green",
                    Lime: "Lime",
                    Maroon: "Maroon",
                    Orange: "Orange",
                    Pink: "Pink",
                    Red: "Red",
                    Violet: "Violet",
                    White: "White",
                    Yellow: "Yellow",
                    Solid: "Solid",
                    Dashed: "pointillée",
                    Dotted: "Dotted",
                    Double: "Double",
                    Groove: "Groove",
                    Inset: "Encart",
                    Outset: "Outset",
                    Ridge: "Ridge",
                    None: "Aucun",
                    Algerian: "Algerian",
                    Arial: "Arial",
                    BodoniMT: "Bodoni MT",
                    BritannicBold: "Britannic Bold",
                    Cambria: "Cambria",
                    Calibri: "Calibri",
                    CourierNew: "Courier New",
                    DejaVuSans: "DejaVu Sans",
                    Forte: "Forte",
                    Gerogia: "Gerogia",
                    Impact: "Impact",
                    SegoeUI: "Segoe UI",
                    Tahoma: "Tahoma",
                    TimesNewRoman: "Times New Roman",
                    Verdana: "Verdana",
                    CubeDimensionBrowser: "Navigateur Dimension Cube",
                    SelectHierarchy: "Sélectionnez Hiérarchie",
                    CalculatedField: "Champ calculé",
                    Name: "nom",
                    Add: "Ajouter:",
                    Formula: "Formule:",
                    Delete: "Supprimer",
                    Fields: "Champs",
                    CalculatedFieldNameNotFound: "Prénom CalculatedField est introuvable",
                    InsertField: "Insérer un champ",
                    EmptyField: "Sil vous plaît entrez le nom de champ calculé ou la formule",
                    NotValid: "formule donnée est pas valide",
                    NotPresent: "champ Valeur utilisée dans toute la formule de champ calculé est pas présent dans le PivotGrid",
                    Confirm: "champ calculé avec le même nom existe déjà en raison de vouloir remplacer.?",
                    CalcValue: "Champ calculé peut être inséré que dans le champ de la zone de valeur",
                    MultipleItems: "Plusieurs éléments",
                    All: "Tous les",
                    Search: "Recherchez",
                    Fontcolor: "Couleur de la police",
                    AddCurrentSelectionToFilter: "Ajouter la sélection actuelle au filtre",
                    Months: "Mois",
                    Days: "Jours",
                    Quarters: "Quarts",
                    Years: "Ans",
                    Qtr: "Trim",
                    Quarter: "Trimestre",
                    NoRecordsToDisplay: "Pas d'enregistrements à afficher.",
                    EnterFormatName: "Entrez le nom du format",
                    FormatName: "Nom de format",
                    RemoveFormat: "Supprimer le format",
                    Edit: "Modifier",
                    DuplicateFormatName: "Nom de format en double",
                    NotAllItemsShowing: "Pas tous les noeuds enfants sont affichés",
                    EditorLinkPanelAlert: "Les membres a plus de 1000 points à l'un ou plusieurs de ses parents. Seuls les 1000 premiers éléments sont affichés sous chaque parent.",
                    Exception: "Exception"
                };
                break;
            case "ejPivotPager":
                ej.PivotPager.Locale = ej.PivotPager.Locale || {};
                ej.PivotPager.Locale["fr-FR"] = {
                    SeriesPage: "Series page",
                    CategoricalPage: "catégorique page",
                    Error: "Error",
                    OK: "OK",
                    Close: "Fermer",
                    PageCountErrorMsg: "Entrez le numéro de page valide"
                };
                break;
            case "ejPivotSchemaDesigner":
                ej.PivotSchemaDesigner.Locale = ej.PivotSchemaDesigner.Locale || {};
                ej.PivotSchemaDesigner.Locale["fr-FR"] = {
                    DoesNotBeginsWith: "N'a pas commence par",
                    DoesNotEndsWith: "Ne se termine par",
                    DoesNotContains: "Ne contient",
                    DoesNotEquals: "N'est pas égaux",
                    IsGreaterThan: "Est supérieure à",
                    IsGreaterThanOrEqualTo: "Est supérieure ou égale à",
                    IsLessThan: "Est inférieure à",
                    IsLessThanOrEqualTo: "Est inférieure ou égale à",
                    ClearSorting: "Tri clair",
                    ClearFilterFrom: "Effacer le filtre de",
                    SortAtoZ: "Trier de A à Z",
                    SortZtoA: "De Z à A Tri",
                    and: "<U> a </ u> e",

                    PivotTableFieldList: "Liste de champs de tableau croisé dynamique",
                    ChooseFieldsToAddToReport: "Choisissez les champs à ajouter à signaler:",
                    DragFieldBetweenAreasBelow: "champs de glisser entre les zones ci-dessous:",
                    ReportFilter: "filtre de rapport",
                    ColumnLabel: "colonne Étiquette",
                    RowLabel: "Label Row",
                    Values: "Valeurs",
                    DeferLayoutUpdate: "Différer la mise en page de mise à jour",
                    Update: "Mettre à jour",
                    ClearFilter: "Effacer le filtre",
                    SelectField: "sélectionnez Champ",
                    Measures: "Mesures",
                    Warning: "Avertissement",
                    AlertMsg: "Le champ que vous déplacez ne peut pas être placé dans cette zone du rapport",
                    Goal: "Goal",
                    Status: "Status",
                    Trend: "Trend",
                    AddToFilter: "Ajouter à filtrer",
                    AddToRow: "Ajouter à la rangée",
                    AddToColumn: "Ajouter à la colonne",
                    AddToValues: "Ajouter à la valeur",
                    OK: "OK",
                    Cancel: "Annuler",
                    Close: "Fermer",
                    Sort: "Trier",
                    LabelFilterLabel: "Afficher les éléments pour lesquels l'étiquette",
                    ValueFilterLabel: "Afficher les éléments pour lesquels",
                    LabelFilters: "Les filtres de l'étiquette",
                    BeginsWith: "Commence par",
                    NotBeginsWith: "Commence pas avec",
                    EndsWith: "Se termine par",
                    NotEndsWith: "Pas une fin avec",
                    Contains: "Contient",
                    NotContains: "Contient pas",
                    ValueFilters: "Les filtres de valeur",
                    ClearFilter: "Clear Filter",
                    Equals: "Est égal à",
                    NotEquals: "Pas égaux",
                    GreaterThan: "Plus de ",
                    GreaterThanOrEqualTo: "Supérieure ou égale à ",
                    LessThan: "Moins de ",
                    LessThanOrEqualTo: "Inférieure ou égale à ",
                    Between: "Entre",
                    NotBetween: "Pas entre",
                    Search: "Recherchez",
                    Remove: "Déposer",
                    AddCurrentSelectionToFilter: "Ajouter la sélection actuelle au filtre",
                    NotAllItemsShowing: "Pas tous les noeuds enfants sont affichés",
                    EditorLinkPanelAlert: "Les membres a plus de 1000 points à l'un ou plusieurs de ses parents. Seuls les 1000 premiers éléments sont affichés sous chaque parent.",
                    NamedSetAlert: "Un ensemble nommé ne peut pas être ajouté au rapport PivotTable en même temps qu'un autre ensemble nommé basé sur le même domaine. Cliquez sur OK pour supprimer ' <Set 1> ' ensemble nommé et ajouter ' <Set 2> ' ensemble nommé."
                };
                break;
            case "ejDiagram":
                ej.datavisualization.Diagram.Locale = ej.datavisualization.Diagram.Locale || {};
                ej.datavisualization.Diagram.Locale["fr-FR"] = {
                    cut: "Coupe",
                    copy: "Copie",
                    paste: "Pâte",
                    undo: "annuler",
                    redo: "Refaire",
                    selectAll: "Sélectionner tout",
                    grouping: "Regroupement",
                    group: "Groupe",
                    ungroup: "Dissocier",
                    order: "Commande",
                    bringToFront: "Mettre au premier plan",
                    moveForward: "Avance",
                    sendBackward: "Envoyer vers l'arrière",
                    sendToBack: "Envoyer au fond",
                };
                break;
            case "ejChart":
                ej.datavisualization.Chart.Locale = ej.datavisualization.Chart.Locale || {};
                ej.datavisualization.Chart.Locale["fr-FR"] = {
                    zoomIn: "Agrandir",
                    zoomOut: "Dézoomer",
                    zoom: "Zoom",
                    pan: "Casserole",
                    reset: "Réinitialiser"
                };
                break;
            case "ejRangeNavigator":
                ej.datavisualization.RangeNavigator.Locale = ej.datavisualization.RangeNavigator.Locale || {};
                ej.datavisualization.RangeNavigator.Locale["fr-FR"] = {
                    intervals: {
                        quarter: {
                            longQuarters: "Trimestre,",
                            shortQuarters: "Q"
                        },
                        week: {
                            longWeeks: "Semaine,",
                            shortWeeks: "W"
                        },
                    },
                };
                break;
            case "ejMap":
                ej.datavisualization.Map.Locale = ej.datavisualization.Map.Locale || {};
                ej.datavisualization.Map.Locale["fr-FR"] = {
                    zoomIn: "Agrandir",
                    zoomOut: "Dézoomer",
                    panTop: "Pan Top",
                    panBottom: "Pan Bas",
                    panLeft: "Pan gauche",
                    panRight: "Panneau droit",
                    home: "Accueil"
                };
                break;
            case "ejReportViewer":
                ej.ReportViewer.Locale = ej.ReportViewer.Locale || {};
                ej.ReportViewer.Locale["fr-FR"] = {
                    toolbar: {
                        print: {
                            headerText: "Impression",
                            contentText: "Imprimer le rapport."
                        },
                        exportformat: {
                            headerText: "Exportation",
                            contentText: "Sélectionnez le format de fichier exporté.",
                            Pdf: "PDF",
                            Excel: "Exceller",
                            Word: "Mot",
                            Html: "Html",
                            PPT: "PPT",
                            CSV: 'CSV'
                        },
                        first: {
                            headerText: "Premier",
                            contentText: "Aller à la première page du rapport."
                        },
                        previous: {
                            headerText: "précédent",
                            contentText: "Aller à la page précédente du rapport."
                        },
                        next: {
                            headerText: "Prochain",
                            contentText: "Aller à la page suivante du rapport."
                        },
                        last: {
                            headerText: "Dernier",
                            contentText: "Aller à la dernière page du rapport."
                        },
                        documentMap: {
                            headerText: "document Carte",
                            contentText: "Afficher ou masquer la carte du document."
                        },
                        parameter: {
                            headerText: "Paramètre",
                            contentText: "Afficher ou masquer le volet des paramètres."
                        },
                        zoomIn: {
                            headerText: "Agrandir",
                            contentText: "Zoom au rapport."
                        },
                        zoomOut: {
                            headerText: "Dézoomer",
                            contentText: "Zoom sur le rapport."
                        },
                        refresh: {
                            headerText: "Rafraîchir",
                            contentText: "Actualiser le rapport."
                        },
                        printLayout: {
                            headerText: "Print Layout",
                            contentText: "Changement entre la mise en page d'impression et les modes normaux."
                        },
                        pageIndex: {
                            headerText: "Numéro de page",
                            contentText: "Actuel numéro de page pour afficher."
                        },
                        zoom: {
                            headerText: "Zoom",
                            contentText: "Zoom avant ou arrière sur le rapport."
                        },
                        back: {
                            headerText: "Arrière",
                            contentText: "Retour au rapport de parent."
                        },
                        fittopage: {
                            headerText: "Ajuster à la page",
                            contentText: "Monter la page du rapport au récipient.",
                            pageWidth: "Largeur de page",
                            pageHeight: "Page entière"
                        },
                        pagesetup: {
                            headerText: "Mise en page",
                            contentText: "Choisissez la page option de configuration pour modifier la taille du papier, l'orientation et les marges."
                        }
                    },
                    pagesetupDialog: {
                        close: "Fermer",
                        paperSize: "Taille de papier",
                        height: "la taille",
                        width: "Largeur",
                        margins: "marges",
                        top: "Sommet",
                        bottom: "Bas",
                        right: "Droite",
                        left: "La gauche",
                        unit: "po",
                        orientation: "Orientation",
                        portrait: "Portrait",
                        landscape: "Paysage",
                        doneButton: "Terminé",
                        cancelButton: "Annuler"
                    },
                    credential: {
                        userName: "Nom d'utilisateur",
                        password: "Password"
                    },
                    waterMark: {
                        selectOption: "S閘ectionnez l'option",
                        selectValue: "S閘ectionnez une valeur"
                    },
                    errorMessage: {
                        startMessage: "Report Viewer a rencontr?des probl鑝es lors du chargement de ce rapport. S'il vous plait",
                        middleMessage: " Cliquez ici",
                        endMessage: "pour voir les d閠ails de l'erreur",
                        closeMessage: "Fermez ce message"
                    },
                    alertMessage: {
                        close: 'Fermer',
                        title: 'Rapport spectateur',
                        done: 'D\'accord',
                        showDetails: 'Afficher les d閠ails',
                        hideDetails: 'Cacher les d閠ails',
                        reportLoad: 'Rapport charg?',
                        RVERR0001: 'La visionneuse de rapports n\'a pas pu charger le rapport',
                        RVERR0002: 'La visionneuse de rapports n\'a pas r閡ssi ?afficher le rapport',
                        RVERR0003: 'Une erreur s\'est produite dans la publication ajax',
                        RVERR0004: 'Veuillez s閘ectionner une valeur pour le param鑤re',
                        RVERR0005: 'le {le nom du param鑤re} param鑤re est manquant une valeur',
                        RVERR0006: 'Veuillez donner l\'entr閑 de type de donn閑s floatt',
                        RVERR0007: 'Veuillez indiquer l\'entr閑 du type de donn閑s entier',
                        RVERR0008: 'La visionneuse de rapports n\'a pas r閡ssi ?valider les informations d\'identification de la source de donn閑s',
                        RVERR0009: 'Les marges se chevauchent ou se trouvent sur le papier. Entrez une taille de marge diff閞ente.',
                        RVERR0010: 'Veuillez entrer une valeur pour le param鑤re',
                        RVERR0011: 'Le param鑤re ne peut pas 阾re vide',
                        RVERR0012: 'La valeur fournie pour le param鑤re de rapport {invite de param鑤re} n\'est pas valide pour son type.'
                    },
                    selectAll: "Tout s閘ectionner",
                    viewButton: "Voir le rapport"
                };
                break;
            case "ejReportDesigner":
                ej.ReportDesigner.Locale = ej.ReportDesigner.Locale || {};
                ej.ReportDesigner.Locale['fr-FR'] = {
                    itemPanel: {
                        waterMarkText: 'Rechercher des widgets',
                        noDataFound: 'Aucun résultat..',
                        groupItems: {
                            basicItems: {
                                groupName: 'Articles de base',
                                Items: {
                                    'line': 'Ligne',
                                    'image': 'image',
                                    'textBox': 'Zone de texte',
                                    'rectangle': 'Rectangle'
                                }
                            },
                            comparison: {
                                groupName: 'Comparaison',
                                Items: {
                                    'column': 'Colonne',
                                    'bar': 'Bar',
                                    'stackedColumn': 'Colonne empilée',
                                    'stackedBar': 'Barre empilée',
                                    'stackedColumnPercent': 'Colonne empilée100%',
                                    'stackedBarPercent': 'Barre empilée100%'
                                }
                            },
                            proportion: {
                                groupName: 'Proportion',
                                Items: {
                                    'pie': 'Tarte',
                                    'explodedPie': 'Tarte éclatée',
                                    'doughnut': 'Donut',
                                    'pyramid': 'Pyramide',
                                    'funnel': 'Entonnoir'
                                }
                            },
                            distribution: {
                                groupName: 'Distribution',
                                Items: {
                                    'area': 'Région',
                                    'smoothArea': 'Zone lisse',
                                    'stackedArea': 'Zone empilée',
                                    'stackedAreaPercent': 'Zone empilée100%',
                                    'line': 'Ligne',
                                    'smoothLine': 'Ligne douce',
                                    'steppedLine': 'Ligne étagée',
                                    'lineWithMarkers': 'Ligne avec marqueurs',
                                    'smoothLineWithMarkers': 'Ligne douce avec des marqueurs',
                                    'scatter': 'Dispersion',
                                    'bubble': 'Bulle',
                                    'polar': 'Polaire',
                                    'radar': 'Radar'
                                }
                            },
                            dataRegions: {
                                groupName: 'Régions de données',
                                Items: {
                                    'grid': 'la grille',
                                    'pivotgrid': 'Grille de pivot'
                                }
                            },
                            subReports: {
                                groupName: 'Sous-rapports',
                                Items: {
                                    'subreport': 'sous-rapport'
                                }
                            }
                        }
                    },
                    toolbar: {
                        newReport: 'Nouveau',
                        open: 'ouvrir',
                        openMenu: {
                            fromDevice: ' de l appareil',
                            fromServer: 'du serveur',
                        },
                        save: 'enregistrer',
                        saveMenu: {
                            saveLabel: 'enregistrer',
                            saveAs: 'enregistrer sous',
                            saveAsMenu: {
                                saveToDevice: 'à l appareil',
                                saveToServer: 'au serveur'
                            }
                        },
                        cut: 'Couper',
                        copy: 'copie',
                        paste: 'coller',
                        undo: 'annuler',
                        redo: 'refaire',
                        zoomIn: 'agrandir',
                        zoomOut: 'Dézoomer',
                        deleteItem: 'effacer',
                        gridLine: 'le quadrillage',
                        header: 'entête',
                        footer: 'bas de page',
                        preview: 'Aperçu',
                        reportUpload: {
                            alertLabel: 'Télécharger',
                            alertMessage: 'Erreur lors du téléchargement du fichier. Veuillez télécharger à nouveau'
                        }
                    },
                    newReport: {
                        cancel: 'Annuler',
                        create: 'créer',
                        title: 'nouveau rapport',
                        fileName: 'nom de fichier',
                        waterMark: 'nom du rapport',
                        close: 'Fermer',
                    },
                    reportAction: {
                        enableLink: 'Activer le lien',
                        linkTo: 'Lié à',
                        report: 'rapport',
                        url: 'URL'
                    },
                    linkReport: {
                        reportCaption: 'rapport',
                        setParameter: 'Définir les paramètres'
                    },
                    imageProperty: {
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            source: 'La source',
                            sourceTypes: {
                                external: 'Externe',
                                embedded: 'Intégré',
                                database: 'Base de données'
                            },
                            value: 'Valeur',
                            mimeType: 'Type MIME',
                            mimeTypes: {
                                bmp: 'image/bmp',
                                jpeg: 'image/jpeg',
                                gif: 'image/gif',
                                png: 'image/png',
                                xPng: 'image/x-png'
                            }
                        },
                        categoryName: 'Lien',
                        appearance: {
                            categoryName: 'Apparence',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            }
                        },
                        size: {
                            categoryName: 'Taille',
                            paddingTypes: {
                                padding: 'Rembourrage',
                                paddingLeft: 'La gauche',
                                paddingTop: 'Haut',
                                paddingRight: 'Droite',
                                paddingBottom: 'Bas'
                            },
                            sizing: 'Dimensionnement',
                            sizeTypes: {
                                auto: 'Taille automatique',
                                fit: 'En forme',
                                proportional: 'FitProportional',
                                clip: 'Agrafe'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille'
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible'
                        }
                    },
                    chartProperty: {
                        commonProperties: {
                            showBorder: 'Afficher la bordure',
                            border: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            background: 'Contexte',
                            font: 'Police de caractère',
                            fontStyle: 'Le style de police',
                            labelRotation: 'Rotation d\'étiquette',
                            categoryAxis: 'Axe de catégorie',
                            valueAxis: 'Axe de valeur',
                            defaultText: 'Défaut',
                            auto: 'Auto',
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé',
                                dashDot: 'point de tiret',
                                dashDotDot: 'point de pointillé'
                            },
                            horizontalAlignments: {
                                near: 'Près',
                                far: 'Loin',
                            },
                            textAlignments: {
                                right: 'Droite',
                                bottom: 'Bas',
                                center: 'Centre',
                                topLeft: 'En haut à gauche',
                                topCenter: 'Centre supérieur',
                                topRight: 'En haut à droite',
                                rightTop: 'En haut a droite',
                                rightCenter: 'Centre droit',
                                rightBottom: 'Bas droit',
                                bottomLeft: 'En bas à gauche',
                                bottomCenter: 'Centre inférieur',
                                bottomRight: 'En bas à droite',
                                leftTop: 'En haut à gauche',
                                leftCenter: 'Centre gauche',
                                leftBottom: 'En bas à gauche',
                            },
                            fontStyleTypes: {
                                normal: 'Ordinaire',
                                italic: 'Italique'
                            },
                            fontWeightTypes: {
                                light: 'Lumière',
                                bold: 'Audacieux'
                            }
                        },
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            showLegend: {
                                showLegendText: 'Afficher la légende',
                                title: 'Titre',
                                titleFont: 'Police de titre',
                                titleFontStyle: 'Style de police du titre',
                                titleAlignment: 'Alignement du titre',
                                legendPosition: 'Position de légende',
                                enableCustomBounds: 'Activer les limites personnalisées'
                            },
                            chooseSeries: 'Choisissez la série',
                            showMarker: {
                                showMarkerText: 'Afficher le marqueur',
                                color: 'Couleur',
                                markerType: 'Type de marqueur',
                                markerTypes: {
                                    square: 'Carré',
                                    circle: 'Cercle',
                                    diamond: 'diamant',
                                    triangle: 'Triangle',
                                    cross: 'Traverser',
                                    star5: 'Star5',
                                },
                                size: 'Taille'
                            },
                            showDataLabel: {
                                showDataLabelText: 'Afficher l\'étiquette de données',
                                dataLabelFormat: 'Format',
                                dataLabelText: 'Étiquette',
                                dataLabelValueAsText: 'utiliser la valeur comme étiquette',
                                dataLabelTypes: {
                                    valueX: '#VALX',
                                    valueY: '#VALY',
                                    valueY2: '#VALY2',
                                    valueY3: '#VALY3',
                                    valueY4: '#VALY4',
                                    valueY5: '#VALY5',
                                    valueY6: '#VALY6',
                                    index: '#INDICE',
                                    percent: '#POUR CENT',
                                    total: '#TOTAL',
                                    axisLabel: '#étiquette d\'axe'
                                }
                            },
                            enableSmartLabel: {
                                smartLabelText: 'activer l\'étiquette intelligente',
                                labelStyle: 'Style d\'étiquette',
                                value: 'Valeur',
                                smartLabelPositions: {
                                    outside: 'À l\'extérieur',
                                    inside: 'À l\'intérieur',
                                    outsideInColumn: 'En dehors de la colonne'
                                },
                                smartLabelStyles: {
                                    pieLabelStyle: 'style d\'étiquette de tarte',
                                    funnelLabelStyle: 'Style d\'étiquette Entonnoir',
                                    pyramidLabelStyle: 'Style d\'étiquette pyramide',
                                    barLabelStyle: 'Style d\'étiquette de barre',
                                    smartLabelStyle: 'style d\'étiquette'
                                }
                            },
                            seriesBorder: 'Série Border',
                            seriesColor: 'Couleur de la série'
                        },
                        categoryName: 'Apparence',
                        chartArea: {
                            categoryName: 'Zone de graphique',
                            colorPalette: 'Palette de couleurs',
                            colorPaletteTypes: {
                                earthTones: 'Tons de terre',
                                excel: 'Exceller',
                                grayScale: 'Échelle de gris',
                                pastel: 'Pastel',
                                semiTransparent: 'Semi-transparent',
                                berry: 'Baie',
                                chocolate: 'Chocolat',
                                fire: 'Feu',
                                seaGreen: 'Vert de la mer',
                                brightPastel: 'Pastel lumineux',
                                pacific: 'Pacifique',
                                pacificLight: 'Lumière du Pacifique',
                                pacificSemiTransparent: 'pacifique semi-transparent',
                            }
                        },
                        title: {
                            categoryName: 'Titre',
                            showChartTitle: 'Afficher le titre du graphique',
                            titleText: 'Texte du titre',
                            titlePosition: 'position du titre'
                        },
                        axis: {
                            enableAxis: 'Activer l\'axe',
                            axisTitle: 'Titre de l\'Axe',
                            alignment: 'Alignement',
                            lineStyle: 'Style de ligne',
                            labelOverflowMode: 'Mode de dépassement d\'étiquette',
                            overFlowModeTypes: {
                                trim: 'Réduire',
                                hide: 'Cacher',
                            },
                            labelFont: 'Label Police',
                            enableMajorTicks: 'Activer les tiques majeures',
                            enableMinorTicks: 'Activer les tiques mineures',
                            tickProperties: {
                                tickSize: 'Taille de tique',
                                tickColor: 'Tick Couleur',
                                tickWidth: 'Largeur',
                                length: 'Longueur'
                            },
                            tickPosition: 'Tique la position'
                        },
                        gridLine: {
                            categoryName: 'Ligne de la grille',
                            gridLineStyle: {
                                minorGridLine: 'Afficher le quadrillage mineur',
                                majorGridLineStyle: 'Style de grille principal',
                                minorGridLineStyle: 'Style de grille secondaire'
                            }
                        },
                        pageBreak: {
                            categoryName: 'Saut de page',
                            enablePageBreak: 'Activer le saut de page',
                            breakLocation: 'Break Lieu',
                            breakLocationTypes: {
                                start: 'Début',
                                end: 'Fin',
                                startAndEnd: 'début et fin',
                                between: 'Entre',
                            },
                            pageNumberReset: 'Numéro de page réinitialisé',
                            pageName: 'Nom de la page'
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille'
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible'
                        }
                    },
                    lineProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Paramètres de base',
                            line: 'Ligne',
                            lineTypes: {
                                solid: 'Solide',
                                dashed: 'En pointillé',
                                dotted: 'Pointé',
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille',
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible',
                        }
                    },
                    subReportProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Paramètres de base',
                            report: 'rapport',
                            setParameters: 'Définir les paramètres...'
                        },
                        appearance: {
                            categoryAppearance: 'Apparence',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            }
                        },
                        noRows: {
                            noRowsLabel: 'Aucune ligne',
                            font: 'Police de caractère',
                            fontStyle: {
                                fontStyleLabel: 'Le style de police',
                                fontItem: {
                                    defaultStyle: 'Défaut',
                                    fontNormal: 'Ordinaire',
                                    italic: 'Italique'
                                },
                                fontWeight: {
                                    defaultElement: 'Défaut',
                                    normal: 'Ordinaire',
                                    thin: 'Mince',
                                    extraLight: 'Lumière supplémentaire',
                                    light: 'Lumière',
                                    medium: 'Moyen',
                                    semiBold: 'SemiBold',
                                    bold: 'Audacieux',
                                    extraBold: 'ExtraBold',
                                    heavy: 'Lourd',
                                }
                            },
                            textDecoration: {
                                textDecorationLabel: 'Décoration de texte',
                                defaultDecoration: 'Défaut',
                                none: 'Aucun',
                                underLine: 'Souligner',
                                overLine: 'Overline',
                                lineThrough: 'Ligne à travers'
                            },
                            format: 'Format',
                            lineHeight: 'Hauteur de la ligne',
                            message: 'Message',
                            paddingTypes: {
                                padding: 'Rembourrage',
                                paddingLeft: 'La gauche',
                                paddingRight: 'Droite',
                                paddingTop: 'Haut',
                                paddingBottom: 'Bas',
                            },
                            textAlign: {
                                textAlignLabel: 'Alignement de texte',
                                textAlignDefault: 'Défaut',
                                textAlignGeneral: 'Général',
                                textAlignLeft: 'La gauche',
                                textAlignRight: 'Droite',
                                textAlignCenter: 'Centre'
                            },
                            verticalAlign: {
                                verticalAlignlabel: 'Alignement vertical',
                                verticalAlignDefault: 'Défaut',
                                verticalAlignTop: 'Haut',
                                verticalAlignMiddle: 'Milieu',
                                verticalAlignBottom: 'Bas'
                            },
                            writingMode: {
                                writingModeLabel: "Mode d'écriture",
                                writingModeDefault: 'Défaut',
                                writingModeHorizontal: 'Horizontal',
                                writingModeVertical: 'Verticale',
                                writingModeRotate: 'Rotation270'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible',
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille',
                        },
                        miscellaneous: {
                            categoryMiscellaneous: 'Divers',
                            keepTogether: 'Rester ensemble'
                        }
                    },
                    rectangleProperty: {
                        basicSettings: {
                            categoryBasicSettings: 'Paramètres de base',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            },
                            backGround: 'Contexte'
                        },
                        pageBreak: {
                            pageBreak: 'Saut de page',
                            enablePageBreak: {
                                enablePageBreak: 'Activer le saut de page',
                                breakLocation: {
                                    breakLocationLabel: 'Break Lieu',
                                    none: 'Aucun',
                                    start: 'Début',
                                    end: 'Fin',
                                    startAndEnd: 'StartAndEnd',
                                    between: 'Entre'
                                },
                                pageNumberReset: 'Numéro de page réinitialisé'
                            },
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille',
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible',
                        },
                        rectangleMiscellaneous: {
                            categoryMiscellaneous: 'Divers',
                            keepTogether: 'Rester ensemble',
                            pageName: 'Nom de la page'
                        }
                    },
                    browseFile: {
                        openFile: {
                            selectReport: 'Sélectionnez le rapport',
                            open: 'Ouvrir',
                        },
                        saveFile: {
                            saveAsReport: 'Enregistrer comme rapport',
                            name: 'prénom',
                            save: 'sauvegarder',
                        },
                        close: 'Fermer',
                        cancel: 'Annuler',
                        waterMark: 'Nom du rapport',
                        emptyMessage: 'Cette catégorie est vide',
                        alertMessage: {
                            reportServer: 'Serveur de rapport',
                            selectCategory: 'Veuillez sélectionner une catégorie',
                        },
                        warningMessage: {
                            fileNameLabel: 'Un élément "',
                            fileNameExist: '.rdl "existe déjà. Voulez-vous remplacer l\'élément existant?',
                            populateCategory: 'ReportDesigner n\'a pas pu récupérer les ressources du ReportServer',
                        }
                    },
                    expressionMenu: {
                        reset: 'Réinitialiser',
                        expression: 'Expression',
                        advanced: 'Avancée'
                    },
                    propertyPanel: {
                        property: 'Propriétés',
                        data: 'Les données',
                        name: 'Nom',
                        toolTipStyle: 'Style',
                        toolTipColor: 'Couleur',
                        toolTipWidth: 'Largeur',
                        setSorts: 'Définir les triages',
                        setFilters: 'Définir les filtres',
                        advancedOptions: 'Options avancées',
                        expressionList: {
                            top: 'Haut',
                            right: 'Droite',
                            bottom: 'Bas',
                            left: 'La gauche',
                            style: 'Style',
                            color: 'Couleur',
                            size: 'Taille',
                            fontFamily: 'Famille de polices',
                            width: 'Largeur',
                            height: 'la taille',
                            weight: 'Poids',
                            image: 'Image'
                        },
                        alertMessage: {
                            nameWarning: 'Name cannot be empty',
                            nameAlert: 'Name already exists',
                            nameValidation: 'Le nom ne doit pas contenir d\'espaces et de caractères spéciaux'
                        }
                    },
                    dataSource: {
                        newDatasource: 'NOUVELLE DATASOURCE',
                        datasource: 'LES SOURCES DE DONNÉES',
                        datasourceList: {
                            data: 'Les données',
                            contextMenu: {
                                editItem: 'modifier',
                                deleteItem: 'Effacer',
                                createDataSet: 'Créer un DataSet'
                            }
                        },
                        datasourceType: {
                            existOption: 'Existant',
                            newOption: 'Créer un nouveau',
                            selectDatasoure: 'Sélectionnez la source de données',
                            connectDatasource: 'Connecter la source de données',
                            datasourceType: 'Choisissez le type à connecter',
                            sqlLabel: 'SQL',
                            sqlCeLabel: 'SQLCE',
                            odbcLabel: 'ODBC',
                            oracleLabel: 'ORACLE',
                            oledbLabel: 'OLEDB',
                            xmlLabel: 'XML',
                            odataLabel: 'ODATA',
                            postSQLLabel: 'PostSQL',
                            sassLabel: 'TOUPET',
                            sharedLabel: 'partagé'
                        },
                        datasourceConnection: {
                            newConnection: 'NOUVELLE CONNEXION',
                            editConnection: 'MODIFIER LA CONNEXION',
                            name: 'prénom',
                            save: 'sauvegarder',
                            connect: 'Relier',
                            cancel: 'Annuler'
                        },
                        sqlDatasource: {
                            authenticationType: 'type d\'identification',
                            window: 'les fenêtres',
                            sqlServer: 'serveur SQL',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            switchLabel: 'Source de données Advancepanel',
                            switchAlert: 'Passer au concepteur visuel annulera les modifications manuelles faites à la chaîne de connexion. Voulez-vous utiliser le concepteur visuel de toute façon ? ',
                            basicOption: {
                                serverName: 'Nom du serveur',
                                savePassword: 'Enregistrer le mot de passe',
                                database: 'Base de données',
                                advanceSwitch: 'Option Advance'
                            },
                            advanceOption: {
                                connectionString: 'Chaîne de connexion',
                                promptLabel: 'Texte d\'invite',
                                prompt: 'Rapide',
                                none: 'Aucun',
                                basicSwitch: 'Option de base'
                            },
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                                alertServerName: 'Indiquez le nom du serveur',
                                alertDatabaseName: 'Indiquez le nom de la base de données'
                            }
                        },
                        sqlceDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            authentication: 'Authentification',
                            none: 'Aucun',
                            password: 'Mot de passe',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPassword: 'Spécifiez le mot de passe'
                            }
                        },
                        odbcDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            authentication: 'Authentification',
                            prompt: 'Rapide',
                            none: 'Aucun',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            promptLabel: 'Texte d\'invite',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                            }
                        },
                        oracleDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            authentication: 'Authentification',
                            prompt: 'Rapide',
                            none: 'Aucun',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            promptLabel: 'Texte d\'invite',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                            }
                        },
                        oledbDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            authentication: 'Authentification',
                            prompt: 'Rapide',
                            none: 'Aucun',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            promptLabel: 'Texte d\'invite',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                            }
                        },
                        xmlDatasource: {
                            connectionString: 'Chaîne de connexion',
                        },
                        odataDatasource: {
                            connectionString: 'Chaîne de connexion',
                            alertMessage: 'Spécifiez la chaîne de connexion'
                        },
                        postSQLDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            authentication: 'Authentification',
                            prompt: 'Rapide',
                            none: 'Aucun',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            promptLabel: 'Texte d\'invite',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                            }
                        },
                        sassDatasource: {
                            connectionString: 'Chaîne de connexion',
                            authenticationType: 'type d\'identification',
                            window: 'les fenêtres',
                            sqlServer: 'serveur SQL',
                            prompt: 'Rapide',
                            none: 'Aucun',
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe',
                            promptLabel: 'Texte d\'invite',
                            alertMessage: {
                                alertConnectionString: 'Spécifiez la chaîne de connexion',
                                alertPrompt: 'Spécifiez le texte d\'invite',
                                alertUserName: 'Précisez le nom d\'utilisateur',
                                alertPassword: 'Spécifiez le mot de passe',
                            }
                        },
                        sharedDatasource: {
                            datasource: 'DataSource partagée',
                            alertMessage: 'Sélectionnez une source de données partagée'
                        },
                        alertMessage: {
                            alertLabel: 'La source de données',
                            deleteValue: 'Supprimer la source de données \'',
                            alertConnectionFailed: 'Le concepteur de rapports n\'a pas réussi à connecter la source de données',
                            nameWarning: 'Spécifiez le nom DataSource',
                            nameAlert: 'Le nom spécifié existe déjà dans la liste DataSource',
                            nameValidation: 'Le nom ne doit pas contenir d\'espaces et de caractères spéciaux'
                        }
                    },
                    imageManager: {
                        headerText: "Gestionnaire d'image",
                        addImageButton: 'Ajouter une image',
                        deleteImage: "Supprimer l'image incorporée",
                        image: 'Image',
                    },
                    linkParameter: {
                        title: 'Paramètres',
                        descriptionText: 'Paramètres de rapport',
                        addText: 'AJOUTER',
                        ok: 'D\'accord',
                        cancel: 'Annuler',
                        nameWaterMark: 'Le nom du paramètre',
                        valueWaterMark: 'Valeur',
                        errorMessage: 'Entrez une valeur pour cette propriété',
                        closeToolTip: 'Fermer'
                    },
                    filter: {
                        title: 'Filtre',
                        descriptionLable: 'Inclure les lignes où les conditions suivantes sont vraies.',
                        add: 'AJOUTER',
                        ok: 'D\'accord',
                        cancel: 'Annuler',
                        valueWaterMark: 'Valeur',
                        fieldWaterMark: 'Choisissez le champ',
                        closeToolTip: 'Fermer',
                        errorMessage: {
                            booleanValidation: 'La valeur n\'est pas une valeur booléenne. ',
                            intValidation: 'La valeur n\'est pas un nombre entier. ',
                            floatValidation: 'La valeur n\'est pas un flotteur. ',
                            dateTimeValidation: 'La valeur est un format date / heure invalide. ',
                            topBottomFilter: 'Les opérateurs de filtre Top% et Bottom% requièrent un float ou un type de données entier.',
                            expressionValidation: 'Choisir une valeur pour le champ d\'expression'
                        },
                        operatorTypes: {
                            like: 'Comme',
                            topN: 'HautN',
                            bottomN: 'BasN',
                            topPercent: 'Haut%',
                            bottomPercent: 'Bas%',
                            between: 'Entre',
                            inFilter: 'Dans',
                        }
                    },
                    dataPanel: {
                        itemTooltip: {
                            properties: 'Propriétés',
                            data: 'Les données',
                            parameters: 'paramètres',
                            imageManager: "Gestionnaire d'image",
                        },
                        dataSourceNewAlert: {
                            title: 'La source de données',
                            contentMessage: 'Voulez-vous annuler la création de DataSource ?',
                        },
                        dataSourceEditAlert: {
                            title: 'La source de données',
                            contentMessage: "Voulez-vous annuler l'édition de DataSource ?",
                        },
                        dataSetNewAlert: {
                            title: 'DataSet',
                            contentMessage: 'Voulez-vous annuler la création de DataSet ?',
                        },
                        dataSetEditAlert: {
                            title: 'DataSet',
                            contentMessage: "Voulez-vous annuler l'édition de DataSet ?",
                        },
                        parameterNewAlert: {
                            title: 'Paramètre',
                            contentMessage: 'Voulez-vous annuler la création du paramètre ?',
                        },
                        parameterEditAlert: {
                            title: 'Paramètre',
                            contentMessage: "Voulez-vous annuler l'édition du paramètre ?",
                        }
                    },
                    dataSet: {
                        headerText: 'LES DONNÉES',
                        newData: 'AJOUTER LE DATASET',
                        splitButtonMenu: {
                            sharedDataset: 'partagé',
                            createNewDataset: 'Créer un nouveau'
                        },
                        shareDataset: {
                            headerText: 'NOUVEAU DATASET',
                            save: 'sauvegarder',
                            cancel: 'Annuler',
                            nameLable: 'prénom',
                            sharedDatasetLabel: 'DataSet partagé',
                            errorMessage: {
                                nameValidation: 'Indiquez le nom du DataSet',
                                datasetValidation: 'Sélectionnez une source de données partagée',
                                duplicateName: 'Le nom spécifié existe déjà dans la liste DataSet',
                                specialCharacter: 'Le nom ne doit pas contenir d\'espaces et de caractères spéciaux'
                            }
                        },
                        contextMenu: {
                            edit: 'modifier',
                            remove: 'Effacer'
                        },
                        datasourceSwitcher: 'Les sources de données',
                        deleteDataset: 'Supprimer le jeu de données',
                        deleteField: 'Supprimer le champ'
                    },
                    reportViewer: {
                        toolbar: {
                            print: 'Impression',
                            exportformat: {
                                exportText: 'Exportation',
                                Pdf: 'PDF',
                                Excel: 'Exceller',
                                Word: 'Mot',
                                Html: 'Html',
                                PPT: 'PPT',
                                CSV: 'CSV'
                            },
                            pageSetup: 'Mise en page',
                            gotoFirst: 'Aller à Premier',
                            gotoLast: 'Aller à Dernier',
                            gotoNext: 'Aller à Prochain',
                            gotoPrevious: 'Aller à précédent',
                            gotoParanet: 'Aller à Paranet',
                            zoomIn: 'Zoom au',
                            zoomOut: 'Zoom sur',
                            fittopage: {
                                fitPageText: 'Ajuster à la page',
                                pageWidth: "Largeur de page",
                                pageHeight: "Page entière"
                            },
                            printLayout: 'Imprimer la mise en page',
                            refresh: 'Refresh',
                            documentMap: 'document Carte',
                            parameter: 'Paramètre',
                            viewDesign: 'fermer l aperçu',
                        },
                        pagesetupDialog: {
                            close: 'Fermer',
                            paperSize: 'Taille de papier',
                            height: 'la taille',
                            width: 'Largeur',
                            margins: 'marges',
                            top: 'Sommet',
                            bottom: 'Bas',
                            right: 'Droite',
                            left: 'À gauche',
                            unit: 'po',
                            orientation: 'Orientation',
                            portrait: 'Portrait',
                            landscape: 'Paysage',
                            doneButton: 'Terminé',
                            cancelButton: 'Annuler'
                        },
                        credential: {
                            userName: 'Nom d\'utilisateur',
                            password: 'Mot de passe'
                        },
                        waterMark: {
                            selectOption: 'Sélectionnez l\'option',
                            selectValue: 'Sélectionnez une valeur'
                        },
                        errorMessage: {
                            startMessage: 'La visionneuse de rapports a rencontré des problèmes lors du chargement de ce rapport. S\'il vous plaît',
                            middleMessage: 'Cliquez ici',
                            endMessage: 'pour voir les détails de l\'erreur',
                            closeMessage: 'Fermez ce message'
                        },
                        alertMessage: {
                            close: 'Fermer',
                            title: 'Rapport spectateur',
                            done: 'D\'accord',
                            showDetails: 'Afficher les détails',
                            hideDetails: 'Cacher les détails',
                            reportLoad: 'Rapport chargé:',
                            RVERR0001: 'La visionneuse de rapports n\'a pas pu charger le rapport',
                            RVERR0002: 'La visionneuse de rapports n\'a pas réussi à afficher le rapport',
                            RVERR0003: 'Une erreur s\'est produite dans la publication ajax',
                            RVERR0004: 'Veuillez sélectionner une valeur pour le paramètre',
                            RVERR0005: 'le {le nom du paramètre} paramètre est manquant une valeur',
                            RVERR0006: 'Veuillez donner l\'entrée de type de données floatt',
                            RVERR0007: 'Veuillez indiquer l\'entrée du type de données entier',
                            RVERR0008: 'La visionneuse de rapports n\'a pas réussi à valider les informations d\'identification de la source de données',
                            RVERR0009: 'Les marges se chevauchent ou se trouvent sur le papier. Entrez une taille de marge différente.',
                            RVERR0010: 'Veuillez entrer une valeur pour le paramètre',
                            RVERR0011: 'Le paramètre ne peut pas être vide',
                            RVERR0012: 'La valeur fournie pour le paramètre de rapport {invite de paramètre} n\'est pas valide pour son type.'
                        },
                        selectAll: 'Tout sélectionner',
                        viewButton: 'Voir le rapport'
                    },
                    sortData: {
                        sorting: 'Tri',
                        add: 'AJOUTER',
                        changeSortingOptions: 'Modifier les options de tri.',
                        sortBy: 'Trier par',
                        thenBy: 'Puis par',
                        direction: {
                            ascending: 'Ascendant',
                            descending: 'Descendant',
                        },
                        chooseField: 'Choisissez le champ',
                        errorMessage: "Choisir une valeur pour le champ d'expression",
                        ok: "D'accord",
                        cancel: 'Annuler',
                        close: 'Fermer',
                    },
                    groupData: {
                        grouping: 'Regroupement',
                        name: 'prénom',
                        label: 'Étiquette',
                        changeGroupingOptions: 'Modifier les options de regroupement.',
                        add: 'AJOUTER',
                        groupBy: 'Par groupe',
                        andOn: 'Et sur',
                        chooseField: 'Choisissez le champ',
                        ok: "D'accord",
                        cancel: 'Annuler',
                        close: 'Fermer',
                        errorMessage: {
                            nameErrorMessage: "S'il vous plaît entrer le nom",
                            expressionErrorMessage: 'Choisir une valeur pour un champ d\'expression',
                        },
                    },
                    alertMessage: {
                        yes: 'Oui',
                        no: 'Non',
                        ok: "D'accord",
                        showDetails: 'Afficher les détails',
                        hideDetails: 'Cacher les détails',
                        close: 'Fermer'
                    },
                    parameter: {
                        listPanel: {
                            headerText: 'PARAMÈTRES',
                            newParameter: 'NOUVEAU PARAMETRE',
                            editMenu: {
                                edit: 'modifier',
                                remove: 'Effacer'
                            },
                            alertTitle: 'Parametre'
                        },
                        configurationPanel: {
                            newHeaderText: 'NOUVEAU PARAMETRE',
                            editHeaderText: 'MODIFIER PARAMÈTRE',
                            nameLabel: 'prénom',
                            promptLable: 'Rapide',
                            dataTypeLable: 'Type de données',
                            blankValueLable: 'Autoriser la valeur vide("")',
                            nullValueLable: 'Autoriser la valeur null',
                            multipleValueLable: 'Autoriser plusieurs valeurs',
                            visibilityLable: 'Visibilité',
                            assignValueLable: 'Attribuer une valeur >>',
                            save: 'sauvegarder',
                            cancel: 'Annuler',
                            visibility: {
                                visible: 'Visible',
                                hidden: 'Caché',
                                internal: 'Interne'
                            },
                            dataType: {
                                stringType: 'Chaîne',
                                booleanType: 'Booléen',
                                dateTimeType: 'DateTime',
                                integerType: 'Entier',
                                floatType: 'Flotte'
                            }
                        },
                        errorMessage: {
                            nameField: 'S\'il vous plaît entrer le nom',
                            promptField: 'Veuillez entrer la valeur',
                            nameAlreadyExists: 'Le nom du paramètre existe déjà',
                        },
                        warningMessage: {
                            specialCharacter: 'Le nom ne doit pas contenir d\'espaces et de caractères spéciaux',
                            multipleValueAlert: 'Plusieurs valeurs par défaut ont été spécifiées. Le paramètre n\'autorise pas plusieurs valeurs. ',
                            nullValueAlert: 'Dans le champ de valeur, une valeur nulle a été spécifiée. Le paramètre n\'autorise pas les valeurs nulles. ',
                        },
                        alertMessage: {
                            confirmNullCheck: 'Les valeurs disponibles ou par défaut peuvent contenir une valeur nulle. Voulez-vous activer la case à cocher autoriser la valeur nulle?',
                            confirmBlankValue: 'Les valeurs disponibles ou par défaut peuvent contenir une valeur vide, Voulez-vous activer la case à cocher de la valeur vide?',
                            dataTypeChange: 'Changer le type de données annulera les modifications apportées aux valeurs disponibles et par défaut.Voulez - vous changer le type de données quand même?',
                            deleteAlert: 'Supprimer le paramètre de rapport'
                        },
                        assignData: {
                            title: 'Paramètre',
                            availableValue: 'Valeur disponible',
                            defaultValue: 'Valeur par défaut',
                            none: 'Aucun',
                            specify: 'Spécifier',
                            query: 'Valeur de requête',
                            ok: 'D\'accord',
                            cancel: 'Annuler',
                            availableFields: {
                                specifyDescriptionText: 'Ajouter les valeurs disponibles pour les paramètres:',
                                queryDescriptionText: 'Choisissez l\'ensemble de données et les champs pour les valeurs disponibles:',
                                nameFieldWaterMark: 'Étiquette',
                                valueFieldWaterMark: 'Valeur'
                            },
                            defaultFields: {
                                specifyDescriptionText: 'Ajouter les valeurs par défaut pour les paramètres:',
                                queryDescriptionText: 'Choisissez l\'ensemble de données et les champs pour les valeurs par défaut:',
                                defValueWaterMark: 'Choisissez la valeur par défaut'
                            },
                            datasetWaterMark: 'Choisir la valeur du jeu de données',
                            valueWaterMark: 'Choisir une valeur',
                            lableWaterMark: 'Choisir une étiquette',
                            add: 'AJOUTER',
                            datasetLableText: 'Dataset',
                            valueLableText: 'Champ de valeur',
                            labelFieldText: 'Champ d\'étiquette',
                            errorMessage: {
                                boolTypeCheck: 'La valeur n\'est pas une valeur booléenne. ',
                                dateTypeCheck: 'La valeur est un format de date non valide. ',
                                intTypeCheck: 'La valeur n\'est pas un nombre entier. ',
                                floatTypeCheck: 'La valeur n\'est pas un flottant. ',
                                multipleValuesCheck: 'Un paramètre à valeurs multiples ne peut pas inclure de valeurs NULL',
                                datasetFieldCheck: 'Le champ Dataset est requis. ',
                                valueFieldCheck: 'Le champ de valeur est requis. ',
                                syntaxLabelField: 'La valeur entrée dans le champ label n\'est pas une syntaxe de jeton valide. ',
                                syntaxValueField: 'La valeur entrée dans le champ de valeur n\'est pas une syntaxe de jeton valide. ',
                                blankValueCheck: 'Le champ de valeur est vide. Le paramètre n\'autorise pas les valeurs vides. ',
                            },
                            closeToolTip: 'Fermer'
                        }
                    },
                    formatData: {
                        title: 'Format de dialogue',
                        typeSelect: 'Nombre',
                        typeFormat: {
                            numberType: {
                                numberType: 'Nombre',
                                decimalPlaces: 'Décimales',
                                negativeValues: 'Valeurs négatives',
                                showZeroAs: {
                                    showZeroAs: 'Montrer zéro comme',
                                    none: '(aucun)'
                                },
                                representation: 'Représentation',
                                repDropDwn: {
                                    thousands: 'Milliers',
                                    millions: 'Des millions',
                                    billions: 'Des milliards',
                                },
                                useRegionFormating: 'Utiliser le formatage régional',
                                use1000Separator: 'Utilisez le séparateur 1000 (,)'
                            },
                            currency: {
                                currencyType: 'Devise',
                                decimalPlaces: 'Décimales',
                                negativeValues: 'Valeurs négatives',
                                cultureCurrency: 'Culture monétaire',
                                showZeroAs: {
                                    none: '(aucun)'
                                },
                                representation: 'Représentation',
                                repDropDwn: {
                                    thousands: 'Milliers',
                                    millions: 'Des millions',
                                    billions: 'Des milliards',
                                },
                                useRegionFormating: 'Utiliser le formatage régional',
                                use1000Separator: 'Utilisez le séparateur 1000 (,)',
                                includeSpace: 'Inclure un espace'
                            },
                            date: {
                                dateType: 'Rendez-vous amoureux',
                                date: 'Rendez-vous amoureux'
                            },
                            time: {
                                timeType: 'Temps',
                                time: 'Temps'
                            },
                            percentage: {
                                percentageType: 'Pourcentage',
                                decimalPlaces: 'Décimales',
                                includeSpace: 'Inclure un espace'
                            },
                            scientific: {
                                scientificType: 'Scientifique',
                                decimalPlaces: 'Décimales'
                            },
                            custom: {
                                customType: 'Douane',
                                customFormat: 'Format personnalisé'
                            },
                        },
                        preview: 'Aperçu',
                        ok: 'D accord',
                        cancel: 'Annuler',
                        close: 'Fermer'
                    },
                    expression: {
                        title: 'Expression',
                        descriptionText: 'Définir l\'expression pour : ',
                        optionLabel: 'Options',
                        dataLabel: 'Les données',
                        descritionLabel: 'La description',
                        exampleLabelText: 'Exemple',
                        ok: 'D\'accord',
                        cancel: 'Annuler',
                        textAreaWaterMark: 'Expression',
                        parameters: 'Paramètres',
                        optionWaterMark: 'Choisir une option',
                        dataWaterMark: 'Sélectionnez une donnée',
                        reportData: 'Aucune donnée de rapport trouvée',
                        closeToolTip: 'Fermer',
                        category: {
                            builtInFields: 'Champs intégrés',
                            operators: 'Les opérateurs',
                            functions: 'Les fonctions'
                        },
                        description: {
                            executionTime: 'La date et l\'heure auxquelles les rapports commencent à s\'exécuter.',
                            overallPageNumber: 'Le numéro de page global actuel ne peut être utilisé que dans l\'en-tête ou le pied de page.',
                            overallTotalPages: 'Le nombre total de pages du rapport ne peut être utilisé que dans l\'en-tête et le pied de page.',
                            pageName: 'Le nom de la page en cours dans le rapport ne peut être utilisé que dans l\'en-tête ou le pied de page.',
                            pageNumber: 'Le numéro de page actuel qui peut être réinitialisé par l\'utilisation de sauts de page',
                            isInteractive: 'Un booléen qui indique si la demande de rendu en cours utilise un format interactif.',
                            renderName: 'Le nom du moteur de rendu tel qu\'il est enregistré dans le fichier de configuration RSReportServer.',
                            reportFolder: 'Le chemin d\'accès complet au dossier contenant le rapport n\'inclut pas l\'URL du serveur de rapports.',
                            reportName: 'L\'URL du serveur de rapports sur lequel le rapport est exécuté',
                            reportServerUrl: 'L\'URL du serveur de rapports sur lequel le rapport est exécuté.',
                            totalPages: 'Le nombre total de pages dans la séquence de pages continue actuelle peut être utilisé uniquement dans l\'en-tête et le pied de page. Le nombre peut être réinitialisé en utilisant des sauts de page.',
                            language: 'L\'ID de langue du client exécutant le rapport.',
                            userID: 'L\'ID de l\'utilisateur exécutant le rapport.',
                            powerNumberType: 'Lève un nombre à la puissance d\'un autre nombre.',
                            multiply: 'Multiplie deux nombres.',
                            integerDivision: 'Divise deux nombres et renvoie un entier.',
                            modulus: 'Divise deux nombres et renvoie seulement le reste.',
                            add: 'Ajoute deux nombres et peut être utilisé pour concaténer deux chaînes.',
                            floatDivision: 'Divise deux nombres et renvoie un point flottant.',
                            difference: 'Donne la différence entre deux nombres ou indique la valeur négative d\'une expression numérique.',
                            lesser: 'Moins que.',
                            lesserOrEqual: 'Inférieur ou égal à.',
                            greater: 'Plus grand que.',
                            greaterOrEqual: 'Plus grand ou égal à.',
                            equal: 'Égal à.',
                            notEqual: 'Pas égal à.',
                            like: 'Compare deux chaînes.',
                            isOperator: 'Compare deux variables de référence d\'objet.',
                            expression: 'Génère une concaténation de chaîne de deux expressions.',
                            stringType: 'Ajoute deux nombres, et il peut être utilisé pour concaténer deux chaînes.',
                            and: 'Effectue une conjonction logique sur deux expressions booléennes ou une conjonction bit à bit sur deux',
                            not: 'Effectue une négation logique sur une expression booléenne ou une négation bit à bit sur une expression numérique.',
                            or: 'Utilisé pour effectuer une disjonction logique sur deux expressions booléennes ou une disjonction binaire sur deux valeurs numériques.',
                            xor: 'Effectue une opération d\'exclusion logique sur deux expressions booléennes ou une exclusion binaire sur deux expressions numériques.',
                            andAlso: 'Effectue une conjonction logique en court-circuit sur deux expressions.',
                            orElse: 'Utilisé pour effectuer une disjonction logique de court-circuit sur deux expressions.',
                            left: 'Effectue un décalage arithmétique à gauche sur un motif de bits.',
                            right: 'Effectue un décalage arithmétique à droite sur un modèle de bits.',
                            asc: 'Renvoie une valeur entière représentant le code de caractère correspondant à un caractère.',
                            ascW: 'Renvoie une valeur entière représentant le code de caractère correspondant à un caractère.',
                            chr: 'Renvoie le caractère associé au code de caractère spécifié.',
                            chrW: 'Renvoie le caractère associé au code de caractère spécifié.',
                            filter: 'Renvoie un tableau basé sur zéro contenant un sous-ensemble d\'un tableau de chaînes basé sur des critères de filtre spécifiés.',
                            formatStringType: 'Renvoie une chaîne formatée conformément aux instructions d\'une expression de chaîne de format.',
                            currency: 'Renvoie une expression formatée en tant que valeur de devise à l\'aide du symbole monétaire défini dans le panneau de configuration du système.',
                            dateTime: 'Renvoie une expression de chaîne représentant une valeur date / heure.',
                            numberType: 'Retourne une expression formatée en nombre.',
                            percent: 'Renvoie une expression formatée en pourcentage (multipliée par 100).',
                            getChar: 'Renvoie une valeur char représentant le caractère de l\'index spécifié dans la chaîne fournie.',
                            inStr: 'Renvoie un entier spécifiant la position de départ de la première occurrence d\'une chaîne dans une autre.',
                            inStrRev: 'Renvoie la position de la première occurrence d\'une chaîne dans une autre, en commençant par le côté droit de la chaîne.',
                            join: 'Renvoie une chaîne créée en joignant un certain nombre de sous-chaînes dans un tableau.',
                            lCase: 'Renvoie une chaîne ou un caractère converti en minuscules.',
                            leftStringType: 'Renvoie une chaîne contenant un nombre spécifié de caractères du côté gauche d\'une chaîne.',
                            stringLength: 'Renvoie un entier contenant le nombre de caractères d\'une chaîne ou le nombre.',
                            lSet: 'Renvoie une chaîne alignée à gauche contenant la chaîne spécifiée ajustée à la longueur spécifiée.',
                            leftTrim: 'Renvoie la chaîne sans les espaces de fin du côté gauche dans la chaîne donnée.',
                            middle: 'Renvoie une chaîne contenant un nombre spécifié de caractères d\'une chaîne.',
                            replace: 'Renvoie une chaîne dans laquelle une sous-chaîne spécifiée a été remplacée par une autre.',
                            rightString: 'Renvoie une chaîne contenant un nombre spécifié de caractères du côté droit d\'une chaîne.',
                            rightSet: 'Renvoie une chaîne alignée à droite contenant la chaîne spécifiée ajustée à la longueur spécifiée.',
                            rightTrim: 'Renvoie la chaîne sans les espaces de fin du côté droit dans la chaîne donnée.',
                            stringSpace: 'Renvoie une chaîne constituée du nombre d\'espaces spécifié.',
                            splitString: 'Renvoie un tableau unidimensionnel à base zéro contenant un nombre spécifié de sous-chaînes.',
                            strComp: 'Renvoie -1, 0 ou 1, en fonction du résultat d\'une comparaison de chaînes.',
                            strConv: 'Renvoie une chaîne convertie comme spécifié.',
                            duplicateString: 'Renvoie une chaîne ou un objet constitué du caractère spécifié répété le nombre de fois spécifié.',
                            strReverse: 'Renvoie une chaîne dans laquelle l\'ordre des caractères d\'une chaîne spécifiée est inversé.',
                            trim: 'Renvoie la chaîne sans espaces de fin dans la chaîne donnée.',
                            upperCase: 'Renvoie une chaîne ou un caractère contenant la chaîne spécifiée convertie en majuscule.',
                            cDate: 'Convertir à ce jour.',
                            dateAdd: 'Renvoie une valeur de date contenant les valeurs de date et d\'heure auxquelles un intervalle de temps spécifié a été ajouté.',
                            dateDiff: 'Renvoie une valeur longue spécifiant le nombre d\'intervalles de temps entre deux valeurs de date.',
                            datePart: 'Renvoie une valeur entière contenant le composant spécifié d\'une valeur de date donnée.',
                            dateSerial: 'Renvoie une valeur de date représentant une année, un mois et un jour spécifiés, avec l\'heure définie sur minuit (00:00:00).',
                            dateString: 'Renvoie ou définit une valeur de chaîne représentant la date actuelle en fonction de votre système.',
                            dateValue: 'Renvoie une valeur de date contenant les informations de date représentées par une chaîne, avec les informations de temps',
                            day: 'Renvoie une valeur entière de 1 à 31 représentant le jour du mois.',
                            format: 'Renvoie une expression de chaîne représentant la valeur date / heure.',
                            hour: 'Renvoie une valeur entière de 0 à 23 représentant l\'heure du jour.',
                            minute: 'Renvoie une valeur entière de 0 à 59 représentant la minute de l\'heure.',
                            month: 'Renvoie une valeur entière de 1 à 12 représentant le mois de l\'année.',
                            monthName: 'Renvoie une valeur de chaîne contenant le nom du mois spécifié.',
                            now: 'Renvoie une valeur de date contenant la date et l\'heure actuelles en fonction de votre système.',
                            second: 'Renvoie une valeur entière de 0 à 59 représentant la seconde de la minute.',
                            timeOfDay: 'Renvoie ou définit une valeur de date contenant l\'heure actuelle en fonction de votre système.',
                            timer: 'Renvoie une double valeur représentant le nombre de secondes écoulées depuis minuit.',
                            timeSerial: 'Renvoie une valeur de date représentant une heure, une minute et une seconde spécifiées, les informations de date étant définies par rapport au 1er janvier de l\'année 1.',
                            timeString: 'Renvoie ou définit une valeur de chaîne représentant l\'heure actuelle en fonction de votre système.',
                            timeValue: 'Renvoie une valeur de date contenant les informations temporelles représentées par une chaîne, avec les informations de date définies sur le 1er janvier de l\'année 1.',
                            timeToday: 'Renvoie ou définit une valeur de date contenant la date actuelle en fonction de votre système.',
                            timeWeekday: 'Renvoie une valeur entière contenant un nombre représentant le jour de la semaine.',
                            timeWeekdayName: 'Renvoie une valeur de chaîne contenant le nom du jour de la semaine spécifié.',
                            year: 'Renvoie une valeur entière de 1 à 9999 représentant l\'année.',
                            abs: 'Renvoie la valeur absolue d\'un nombre à virgule flottante simple précision.',
                            acos: 'Renvoie l\'angle dont le cosinus est le nombre spécifié.',
                            asin: 'Renvoie l\'angle dont le sinus est le nombre spécifié.',
                            atan: 'Renvoie l\'angle dont la tangente est le nombre spécifié.',
                            atan2: 'Renvoie l\'angle dont la tangente est le quotient de deux nombres spécifiés.',
                            bigMultiply: 'Produit le produit complet de deux nombres de 32 bits.',
                            ceiling: 'Renvoie le plus petit entier supérieur ou égal à l\'entier spécifié.',
                            cos: 'Renvoie le cosinus de l\'angle spécifié.',
                            cosh: 'Renvoie le cosinus hyperbolique de l\'angle spécifié.',
                            exponent: 'Renvoie e élevé à la puissance spécifiée.',
                            fixNumberType: 'Renvoie une partie entière d\'un nombre.',
                            floor: 'Renvoie le plus grand nombre entier inférieur ou égal au nombre spécifié',
                            integer: 'Renvoie une partie entière d\'un nombre.',
                            logrithm: 'Renvoie le logarithme naturel (base e) d\'un nombre spécifié.',
                            logrithm10: 'Renvoie le logarithme en base 10 d\'un nombre spécifié.',
                            maximum: 'Renvoie la valeur maximale de toutes les valeurs non nulles de l\'expression spécifiée.',
                            minimum: 'Renvoie la valeur minimale de toutes les valeurs non nulles de l\'expression spécifiée.',
                            power: 'Renvoie un nombre spécifié élevé à la puissance spécifiée.',
                            random: 'Renvoie un nombre aléatoire de type unique.',
                            round: 'Arrondit une valeur à virgule flottante double précision à l\'entier le plus proche.',
                            sign: 'Renvoie une valeur indiquant le signe d\'un entier signé de 8 bits.',
                            sin: 'Renvoie le sinus de l\'angle spécifié.',
                            sinh: 'Renvoie le sinus hyperbolique de l\'angle spécifié.',
                            squareRoot: 'Renvoie la racine carrée d\'un nombre spécifié.',
                            tangent: 'Renvoie la tangente de l\'angle spécifié.',
                            tangentH: 'Renvoie la tangente hyperbolique de l\'angle spécifié.',
                            isArray: 'Renvoie une valeur booléenne indiquant si une variable pointe sur un tableau.',
                            isDate: 'Renvoie une valeur booléenne indiquant si une expression représente une valeur valide',
                            isNothing: 'Renvoie une valeur booléenne indiquant si une expression n\'a aucun objet',
                            isNumeric: 'Renvoie une valeur booléenne indiquant si une expression peut être évaluée en tant que nombre.',
                            flowChoose: 'Sélectionne et renvoie une valeur à partir d\'une liste d\'arguments.',
                            flowIIf: 'Renvoie l\'un des deux objets en fonction de l\'évaluation d\'une expression.',
                            switchFlow: 'Évalue une liste d\'expressions et renvoie une valeur d\'objet correspondant à la première expression de la liste true.',
                            avg: 'Renvoie la moyenne de toutes les valeurs non nulles de l\'expression spécifiée.',
                            count: 'Renvoie le nombre de valeurs de l\'expression spécifiée.',
                            countDistinct: 'Renvoie le nombre de toutes les valeurs distinctes de l\'expression spécifiée. ',
                            countRows: 'Renvoie un nombre de lignes dans la portée spécifiée.',
                            first: 'Renvoie la première valeur de l\'expression spécifiée.',
                            last: 'Renvoie la dernière valeur de l\'expression spécifiée.',
                            standardDev: 'Renvoie l\'écart type de toutes les valeurs non nulles de l\'expression spécifiée.',
                            standardDevP: 'Renvoie l\'écart type de population de toutes les valeurs non nulles de l\'expression spécifiée.',
                            sum: 'Renvoie la somme des valeurs de l\'expression spécifiée.',
                            variance: 'Renvoie la variance de toutes les valeurs non nulles de l\'expression spécifiée.',
                            varianceP: 'Renvoie la variance de population de toutes les valeurs non nulles de l\'expression spécifiée.',
                            runningValue: 'Utilise une fonction spécifiée pour renvoyer un agrégat en cours d\'exécution de l\'expression spécifiée.',
                            aggregate: 'Renvoie un agrégat personnalisé de l\'expression spécifiée, tel que défini par le fournisseur de données.',
                            doubleDeclining: 'Renvoie un double spécifiant la dépréciation d\'un actif pour une période donnée en utilisant la méthode du solde dégressif double ou une autre méthode que vous spécifiez.',
                            futureValue: 'Renvoie la valeur double en spécifiant la valeur future d\'une annuité sur la base de paiements fixes périodiques et d\'un taux d\'intérêt fixe.',
                            interestPayment: 'Renvoie une valeur double spécifiant le paiement d\'intérêts pour une période donnée d\'une rente sur la base de paiements périodiques et fixes et d\'un taux d\'intérêt fixe.',
                            numberOfPeriods: 'Renvoie une valeur double spécifiant le nombre de périodes pour une annuité basée sur des paiements fixes périodiques et un taux d\'intérêt fixe.',
                            annuityPayment: 'Renvoie  une valeur spécifiant le paiement d\'une annuité sur la base de paiements périodiques et fixes et d\'un taux d\'intérêt fixe.',
                            principalPayment: 'Renvoie  une valeurspécifiant le paiement principal pour une période donnée d\'une rente basée sur des versements fixes périodiques et un taux d\'intérêt fixe.',
                            presentValue: 'Renvoie  une valeur spécifiant la valeur actuelle d\'une rente basée sur des versements périodiques et fixes à payer dans le futur et un taux d\'intérêt fixe.',
                            rateOfInterest: 'Renvoie une valeur spécifiant le taux d\'intérêt par période pour une annuité.',
                            straightLine: 'Renvoie une valeur spécifiant l\'amortissement linéaire d\'un actif pour une période unique.',
                            sumOfYearsDigits: 'Renvoie un double spécifiant la dépréciation des chiffres de la somme des années d\'un actif pour une période donnée.',
                            convertBool: 'Convertir en booléen.',
                            convertByte: 'Convertir en octet.',
                            convertChar: 'Convertir en caractère.',
                            convertDate: 'Convertir à ce jour.',
                            convertDouble: 'Convertir en double.',
                            convertDecimal: 'Convertir en décimal.',
                            convertInteger: 'Convertir en entier.',
                            convertLong: 'Convertir en long.',
                            convertObject: 'Convertir en objet',
                            convertShort: 'Convertir en court.',
                            convertSingle: 'Convertir en simple.',
                            convertString: 'Convertir en chaîne.',
                            fix: 'Renvoie une partie entière d\'un nombre.',
                            hexaDecimal: 'Renvoie une chaîne représentant la valeur hexadécimale d\'un nombre.',
                            integerPortion: 'Renvoie une partie entière d\'un nombre.',
                            octal: 'Renvoie une chaîne représentant la valeur octale d\'un nombre.',
                            stringOfNumber: 'Renvoie une chaîne qui représente un nombre.',
                            stringAsNumeric: 'Renvoie un nombre dans une chaîne sous la forme d\'une valeur numérique du type approprié.',
                            inScope: 'Renvoie true si l\'instance actuelle est dans la portée spécifiée.',
                            depthLevel: 'Renvoie un entier basé sur zéro représentant le niveau de profondeur actuel.',
                            previous: 'Renvoie la valeur de l\'expression pour la ligne de données précédente.',
                            rowNumber: 'Renvoie un nombre en cours d\'exécution de toutes les lignes de la portée spécifiée.'
                        }
                    },
                    dataAssign: {
                        measures: 'Les mesures',
                        dimensions: 'Dimensions',
                        search: 'Chercher',
                        xValue: 'X Valeur (s)',
                        yValue: 'Et Valeur (s)',
                        value: 'Valeur (s)',
                        column: 'Colonne',
                        row: 'Rangée (s)',
                        size: 'Taille (s)',
                        aggregate: 'Agrégat',
                        expression: 'Expression',
                        filters: 'Filtres',
                        sorts: 'Sorts',
                        groups: 'Groupes',
                        dragOnDrop: 'Drag & Drop'
                    },
                    reportProperty: {
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            background: 'Contexte',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            }
                        },
                        generalSettings: {
                            categoryName: 'Général',
                            printFirstPage: 'Imprimer sur la première page',
                            printLastPage: 'Imprimer sur la dernière page'
                        },
                        size: {
                            sizeLabel: 'Taille',
                            paddingTypes: {
                                padding: 'Rembourrage',
                                paddingLeft: 'La gauche',
                                paddingTop: 'Haut',
                                paddingRight: 'Droite',
                                paddingBottom: 'Bas'
                            }
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            left: 'La gauche',
                            top: 'Haut',
                            sizeLabel: 'Taille',
                            width: 'Largeur',
                            height: 'la taille',
                        },
                        margin: {
                            categoryName: 'Marge',
                            categoryHeader: 'Marge',
                            types: {
                                left: 'La gauche',
                                right: 'Droite',
                                bottom: 'Bas',
                                top: 'Haut'
                            }
                        },
                        paperSize: {
                            orientation: 'Orientation',
                            header: 'Taille de papier',
                            label: 'Taille de papier',
                            orientationTypes: {
                                landScape: 'Paysage',
                                portrait: 'Portrait'
                            },
                            types: {
                                a3Size: 'A3',
                                a4Size: 'A4',
                                b4Size: 'B4(JIS)',
                                b5Size: 'B5(JIS)',
                                envelope: 'Enveloppe #10',
                                envelopeMonarch: 'Enveloppe Monarch',
                                executive: 'Exécutif',
                                legal: 'Légal',
                                letter: 'Lettre',
                                tabloid: 'Tabloïde',
                                custom: 'Douane'
                            }
                        }
                    },
                    gridProperty: {
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            horizontalGridLine: 'Ligne de grille horizontale',
                            verticalGridLine: 'Ligne de grille verticale',
                            filters: 'Filtres',
                            sorts: 'Sorts'
                        },
                        columnSettings: {
                            categoryName: 'Paramètres de colonne',
                            chooseColumn: 'Choisissez la colonne',
                            columnName: 'Nom de colonne',
                            format: 'Format',
                            enableLink: 'Activer le lien',
                            headerStyle: 'Style d\'en-tête',
                            cellStyle: 'Style de cellule',
                            summaryStyle: 'Style de résumé',
                        },
                        rowSettings: {
                            categoryName: 'Paramètres de ligne',
                            chooseRow: 'Choisissez une ligne',
                            summaryColumns: 'Colonnes récapitulatives',
                            summaryFields: {
                                column: 'Colonne',
                                expression: 'Expression'
                            }
                        },
                        appearance: {
                            categoryName: 'Apparence',
                            showHeader: 'Afficher en-tête',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            },
                            cellBorder: 'Frontière de cellules',
                            AlterRow: 'Rangée alternative',
                            AlterBackground: 'Contexte alternatif',
                        },
                        pageBreak: {
                            categoryName: 'Saut de page',
                            enablePageBreak: 'Activer le saut de page',
                            breakLocation: {
                                categoryName: 'Break Lieu',
                                none: 'Aucun',
                                start: 'Début',
                                end: 'Fin',
                                startAndEnd: 'Début et fin',
                                between: 'Entre'
                            },
                            pageNumberReset: 'Numéro de page réinitialisé'
                        },
                        miscellaneous: {
                            categoryName: 'Divers',
                            noRowsMessage: 'Aucun message de lignes',
                            pageName: 'Nom de la page',
                            keepTogether: 'Rester ensemble',
                            repeatColumnHeaders: 'Répéter les en-têtes de colonne',
                            fixedColumnHeaders: 'En-têtes de colonne fixe',
                            fixedRowHeaders: 'En-têtes de lignes fixes'
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            sizeLabel: 'Taille',
                            left: 'La gauche',
                            top: 'Haut',
                            width: 'Largeur',
                            height: 'la taille'
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Police de caractère',
                            defaultStyle: 'Défaut',
                            normal: 'Ordinaire',
                            italic: 'Italique'
                        },
                        fontStyle: {
                            categoryName: 'Le style de police',
                            defaultStyle: 'Défaut',
                            normal: 'Ordinaire',
                            thin: 'Mince',
                            extraLight: 'Lumière supplémentaire',
                            light: 'Lumière',
                            medium: 'Moyen',
                            semiBold: 'Semi-gras',
                            bold: 'Audacieux',
                            extraBold: 'Extra Gras',
                            heavy: 'Lourd'
                        },
                        textDecoration: {
                            categoryName: 'Décoration de texte',
                            defaultStyle: 'Défaut',
                            none: 'Aucun',
                            underline: 'Souligner',
                            lineThrough: 'Ligne à travers',
                            overline: 'Sur la ligne'
                        },
                        alignment: {
                            categoryName: 'Alignement',
                            textAlignment: {
                                categoryName: 'Alignement du texte',
                                defaultStyle: 'Défaut',
                                left: 'La gauche',
                                center: 'Centre',
                                right: 'Droite'
                            },
                            verticalAlignment: {
                                categoryName: 'Alignement vertical',
                                defaultStyle: 'Défaut',
                                top: 'Haut',
                                middle: 'Milieu',
                                bottom: 'Bas'
                            }
                        },
                        padding: {
                            padding: 'Rembourrage',
                            paddingLeft: 'La gauche',
                            paddingTop: 'Haut',
                            paddingRight: 'Droite',
                            paddingBottom: 'Bas'
                        },
                        enableSummaryRow: 'Activer la ligne récapitulative'
                    },
                    pivotGridProperty: {
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            horizontalGridLine: 'Ligne de grille horizontale',
                            verticalGridLine: 'Ligne de grille verticale',
                            filters: 'Filtres',
                            sorts: 'Sorts'
                        },
                        appearance: {
                            categoryName: 'Apparence',
                            showHeader: 'Afficher en-tête',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            },
                            cellBorder: 'Frontière de cellules',
                            AlterRow: 'Rangée alternative',
                            AlterBackground: 'Contexte alternatif'
                        },
                        pageBreak: {
                            categoryName: 'Saut de page',
                            enablePageBreak: 'Activer le saut de page',
                            breakLocation: {
                                categoryName: 'Break Lieu',
                                none: 'Aucun',
                                start: 'Début',
                                end: 'Fin',
                                startAndEnd: 'Début et fin',
                                between: 'Entre'
                            },
                            pageNumberReset: 'Numéro de page réinitialisé'
                        },
                        miscellaneous: {
                            categoryName: 'Divers',
                            noRowsMessage: 'Aucun message de lignes',
                            pageName: 'Nom de la page',
                            keepTogether: 'Rester ensemble',
                            repeatColumnHeaders: 'Répéter les en-têtes de colonne',
                            fixedColumnHeaders: 'En-têtes de colonne fixe',
                            fixedRowHeaders: 'En-têtes de lignes fixes',
                            repeatRowHeaders: 'Répéter les en-têtes de ligne'
                        },
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            sizeLabel: 'Taille',
                            left: 'La gauche',
                            top: 'Haut',
                            width: 'Largeur',
                            height: 'la taille'
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible'
                        },
                        font: {
                            categoryName: 'Police de caractère',
                            defaultStyle: 'Défaut',
                            normal: 'Ordinaire',
                            italic: 'Italique'
                        },
                        fontStyle: {
                            categoryName: 'Le style de police',
                            defaultStyle: 'Défaut',
                            normal: 'Ordinaire',
                            thin: 'Mince',
                            extraLight: 'Lumière supplémentaire',
                            light: 'Lumière',
                            medium: 'Moyen',
                            semiBold: 'SemiBold',
                            bold: 'Audacieux',
                            extraBold: 'ExtraBold',
                            heavy: 'Lourd'
                        },
                        textDecoration: {
                            categoryName: 'Décoration de texte',
                            defaultStyle: 'Défaut',
                            none: 'Aucun',
                            underline: 'Souligner',
                            lineThrough: 'Ligne à travers',
                            overline: 'Sur la ligne'
                        },
                        alignment: {
                            categoryName: 'Alignement',
                            textAlignment: {
                                categoryName: 'Alignement du texte',
                                defaultStyle: 'Défaut',
                                left: 'La gauche',
                                center: 'Centre',
                                right: 'Droite'
                            },
                            verticalAlignment: {
                                categoryName: 'Alignement vertical',
                                defaultStyle: 'Défaut',
                                top: 'Haut',
                                middle: 'Milieu',
                                bottom: 'Bas'
                            }
                        },
                        padding: {
                            padding: 'Rembourrage',
                            paddingLeft: 'La gauche',
                            paddingTop: 'Haut',
                            paddingRight: 'Droite',
                            paddingBottom: 'Bas'
                        },
                        link: 'Lien',
                        format: 'Format',
                        summarySettings: {
                            categoryName: 'Paramètres de résumé',
                            enableColumn: 'Activer la colonne récapitulative',
                            columnStyle: 'Style de colonne récapitulatif',
                            columnBorder: 'Bordure de colonne récapitulative',
                            chooseSummary: 'Choisir un résumé',
                            summaryColumns: 'Colonnes récapitulatives',
                            enableRow: 'Activer la ligne récapitulative',
                            rowStyle: 'Style de ligne sommaire',
                            rowBorder: 'Bordure de ligne récapitulative'
                        },
                        groupSettings: {
                            summaryRows: 'Lignes de résumé',
                            summaryStyle: 'Style de résumé',
                            summaryBorder: 'Frontière sommairee',
                            cellStyle: 'Style de cellule',
                            cellBorder: 'Frontière de cellules',
                            summaryTable: {
                                column: 'Colonne',
                                expression: 'Expression'
                            }
                        },
                        columnGroupSettings: {
                            categoryName: 'Paramètres de groupe de colonnes',
                            chooseGroup: 'Choisissez le groupe de colonnes'
                        },
                        rowGroupSettings: {
                            categoryName: 'Paramètres du groupe de lignes',
                            chooseRowGroup: 'Choisissez un groupe de lignes',
                            rowName: 'Nom de la ligne'
                        },
                        columnSettings: {
                            categoryName: 'Paramètres de colonne',
                            chooseColumn: 'Choisissez la colonne',
                            header: 'Entête',
                            headerStyle: 'Style d\'en-tête'
                        },
                        rowSettings: {
                            categoryName: 'Paramètres de ligne',
                            chooseRow: 'Choisissez une ligne'
                        },
                        cornerCellSettings: {
                            categoryName: 'Paramètres de cellule de coin',
                            cellLabel: 'Étiquette de cellule'
                        }
                    },
                    textBoxProperty: {
                        basicSettings: {
                            categoryName: 'Paramètres de base',
                            font: {
                                categoryName: 'Police de caractère',
                                defaultStyle: 'Défaut',
                                normal: 'Ordinaire',
                                italic: 'Italique'
                            },
                            fontStyle: {
                                categoryName: 'Le style de police',
                                defaultStyle: 'Défaut',
                                normal: 'Ordinaire',
                                thin: 'Mince',
                                extraLight: 'Lumière supplémentaire',
                                light: 'Lumière',
                                medium: 'Moyen',
                                semiBold: 'Semi-gras',
                                bold: 'Audacieux',
                                extraBold: 'Extra Gras',
                                heavy: 'Lourd'
                            },
                            textDecoration: {
                                categoryName: 'Décoration de texte',
                                defaultStyle: 'Défaut',
                                none: 'Aucun',
                                underline: 'Souligner',
                                lineThrough: 'Ligne à travers',
                                overline: 'Sur la ligne'
                            },
                            format: 'Format'
                        },
                        alignment: {
                            categoryName: 'Alignement',
                            textAlignment: {
                                categoryName: 'Alignement du texte',
                                defaultStyle: 'Défaut',
                                left: 'La gauche',
                                center: 'Centre',
                                right: 'Droite'
                            },
                            verticalAlignment: {
                                categoryName: 'Alignement vertical',
                                defaultStyle: 'Défaut',
                                top: 'Haut',
                                middle: 'Milieu',
                                bottom: 'Bas'
                            }
                        },
                        appearance: {
                            categoryName: 'Apparence',
                            borderTypes: {
                                border: 'Frontière',
                                borderLeft: 'La gauche',
                                borderTop: 'Haut',
                                borderRight: 'Droite',
                                borderBottom: 'Bas'
                            },
                            borderStyles: {
                                solid: 'Solide',
                                none: 'Aucun',
                                double: 'Double',
                                dashed: 'En pointillé',
                                dotted: 'Pointé'
                            },
                            background: 'Contexte'
                        },
                        link: 'Lien',
                        position: {
                            categoryPosition: 'Position',
                            positionLabel: 'Position',
                            sizeLabel: 'Taille',
                            left: 'La gauche',
                            top: 'Haut',
                            width: 'Largeur',
                            height: 'la taille',
                            direction: {
                                categoryName: 'Direction',
                                leftToRight: 'De gauche à droite',
                                rightToLeft: 'De droite à gauche'
                            }
                        },
                        visibility: {
                            categoryName: 'Visibilité',
                            visible: 'Visible'
                        },
                        miscellaneous: {
                            categoryName: 'Divers',
                            canGrow: 'Peut croître',
                            canShrink: 'Peut rétrécir',
                        },
                        paragraphSettings: {
                            categoryName: 'Paramètres de paragraphe',
                            textAlignment: {
                                categoryName: 'Alignement du texte',
                                defaultStyle: 'Défaut',
                                left: 'La gauche',
                                center: 'Centre',
                                right: 'Droite'
                            },
                            indent: {
                                categoryName: 'Retrait',
                                leftIndent: 'La gauche',
                                rightIndent: 'Droite'
                            },
                            space: {
                                categoryName: 'Espace',
                                topSpace: 'Haut',
                                bottomSpace: 'Bas'
                            },
                            listLevel: {
                                categoryName: 'Niveau de la liste',
                                zeroLevel: '',
                                oneLevel: '',
                                twoLevel: '',
                                threeLevel: '',
                                fourLevel: ''
                            },
                            listStyle: {
                                categoryName: 'Style de liste',
                                none: 'Aucun',
                                numbered: 'Numéroté',
                                bulleted: 'À puces'
                            }
                        },
                        padding: {
                            padding: 'Rembourrage',
                            paddingLeft: 'La gauche',
                            paddingTop: 'Haut',
                            paddingRight: 'Droite',
                            paddingBottom: 'Bas'
                        },
                        contextMenu: {
                            cut: 'Couper',
                            copy: 'Copie',
                            paste: 'Coller',
                            expression: 'Expression'
                        }
                    },
                    designPanel: {
                        headerText: 'Entête',
                        footerText: 'Bas de page'
                    },
                    queryDesigner: {
                        storeParameter: {
                            title: 'Paramètres',
                            ok: 'D\'accord',
                            cancel: 'Annuler',
                            parameterLable: 'Paramètre',
                            nullLable: 'Nul',
                            valueLable: 'Valeur',
                            dataTypeLable: 'Type de données',
                            closeToolTip: 'Fermer'
                        },
                        parameter: {
                            title: 'Paramètres',
                            ok: 'D\'accord',
                            cancel: 'Annuler',
                            parameterLable: 'Paramètre',
                            nullLable: 'Nul',
                            valueLable: 'Valeur',
                            closeToolTip: 'Fermer'
                        },
                        filter: {
                            title: 'Filtres de requête',
                            descriptionLable: 'Liste des filtres de table',
                            add: 'AJOUTER',
                            save: 'D\'accord',
                            cancel: 'Annuler',
                            nullLable: 'Nul',
                            trueLable: 'Vrai',
                            falseLable: 'Faux',
                            parameterTooltip: 'Inclure comme paramètre',
                            closeToolTip: 'Fermer',
                            intOperatorType: {
                                equals: 'Équivaut à',
                                doesNotEqual: 'Équivaut à',
                                greaterThan: 'Plus grand que',
                                greaterThanOrEqual: 'Plus grand ou égal à',
                                lessThan: 'Moins que',
                                lessThanOrEqual: 'Inférieur ou égal à',
                                between: 'Entre',
                                notBetween: 'Pas entre'
                            },
                            stringOpertorType: {
                                equals: 'Équivaut à',
                                startsWith: 'Commence avec',
                                endWith: 'Se termine par',
                                contains: 'Contient',
                                notContains: 'Ne contient pas'
                            },
                            errorMessage: {
                                dateValidation: 'La valeur est un format de date non valide. ',
                                commonContent: 'Le filtre sur ',
                                booleanValidation: ' n\'a aucune valeur à filtrer. Veuillez fournir les valeurs pour le filtre.',
                                stringValidation: ' n\'a pas de valeurs correctes à filtrer. '
                            }
                        },
                        previewArea: {
                            dataPreview: 'Aperçu des données',
                            noRecords: 'Aucun enregistrement à afficher',
                            executeRecords: 'Exécuter pour prévisualiser les enregistrements',
                            record: 'Record',
                            records: 'Enregistrements',
                            retrieved: 'récupéré',
                            loadRecord: 'Charger plus'
                        },
                        schemaArea: {
                            search: 'Chercher',
                            rename: 'Renommer',
                            aggregation: 'Agrégation',
                            dialogHeader: 'DataSet',
                            matchesFound: 'Aucun résultat',
                            alertMessage: {
                                datasourceAlert: 'Sélectionnez une DataSource pour configurer le DataSet de rapport',
                                removeTable: 'Les tables assoiquées ci-dessous seront supprimées avec cette',
                                duplicateName: 'Le nom de colonne spécifié existe déjà',
                                specialCharacter: 'Le nom de la colonne ne doit pas contenir de caractères spéciaux.',
                                switcherAlert: 'Passer au concepteur visuel annulera les modifications manuelles apportées à la requête. Voulez-vous utiliser le concepteur visuel de toute façon?',
                                duplicateDatasetName: 'Le nom spécifié existe déjà dans la liste DataSet',
                                datasetSpecialCharacter: 'Le nom ne doit pas contenir d\'espaces et de caractères spéciaux'
                            },
                            errorMessage: {
                                specifyName: 'Indiquez le nom de la colonne',
                                specifyDatasetName: 'Indiquez le nom du DataSet',
                                previewFailed: 'DataSet n\'a pas réussi à prévisualiser la table sélectionnée',
                                specifyQuery: 'Spécifiez la requête DataSet',
                                selectTable: 'Sélectionnez la table pour enregistrer le DataSet',
                                queryFailed: 'DataSet n\'a pas pu enregistrer la requête de la table sélectionnée',
                                tableProcedure: 'DataSet n\'a pas réussi à récupérer la procédure de table sélectionnée'
                            }
                        },
                        toolBar: {
                            datasourceLable: 'La source de données',
                            datasetName: 'prénom',
                            run: 'Courir',
                            join: 'Joindre',
                            expression: 'Expression',
                            filter: 'Filtre',
                            code: 'Code',
                            finish: 'terminer',
                            cancel: 'Annuler',
                            datasourceWaterMark: 'Sélectionnez une source de données'
                        },
                        joiner: {
                            title: 'Requête Joiner',
                            descriptionLable: 'Liste des relations de table',
                            add: 'AJOUTER',
                            save: 'D\'accord',
                            cancel: 'Annuler',
                            addField: 'Ajouter le champ',
                            closeToolTip: 'Fermer',
                            leftFieldWaterMark: 'Champ gauche',
                            rightFieldWaterMark: 'Champ droit',
                            operatorWaterMark: 'Opérateur',
                            joinTypeWaterMark: 'Type de jointure',
                            leftTableWaterMark: 'Table de gauche',
                            rightTableWaterMark: 'Table droite',
                            joinTypes: {
                                inner: 'Interne',
                                outer: 'Gauche extérieure',
                                rightOuter: 'Extérieur droit',
                                fullOuter: 'Plein extérieur'
                            },
                            errorMessage: {
                                removeField: 'Chaque relation doit avoir une condition de champ. Donc, il ne permet pas de supprimer ce champ ',
                                noRelationAlert: ' est pas de relation avec d\'autres tables',
                                selectLeftTable: 'Sélectionnez la valeur de la table de gauche',
                                selectRightTable: 'Sélectionnez la bonne valeur de la table',
                                selectRelation: 'Sélectionnez la relation pour les tables',
                                selectLeftColumn: 'Sélectionnez la valeur de la colonne de gauche de la ligne de champ #',
                                selectRightColumn: 'Sélectionnez la valeur de la colonne de droite de la ligne de champ #',
                                selectOperator: 'Sélectionnez l\'opérateur de la ligne de champ #',
                                relationExists: 'La relation existe déjà entre les tables'
                            }
                        },
                        credentialDialog: {
                            title: 'Boîte de dialogue Credential',
                            userName: "Nom d'utilisateur",
                            password: 'Mot de passe',
                            userNameWaterMark: "Nom d'utilisateur",
                            passwordWaterMark: 'Mot de passe',
                            userNameErrorMessage: "Veuillez entrer le nom d'utilisateur",
                            passwordErrorMessage: 'Veuillez entrer le mot de passe',
                            connect: 'Relier',
                            close: 'Fermer'
                        },
                        queryExpression: {
                            title: 'Expressions de requête',
                            functionLabel: 'Les fonctions',
                            columnLabel: 'Paramètres de colonne',
                            expressionLabel: 'Expression',
                            nameLabel: 'prénom',
                            descriptionLabel: 'La description ',
                            exampleLabelText: 'Exemple',
                            ok: 'sauvegarder',
                            cancel: 'Annuler',
                            add: 'Ajouter',
                            textAreaWaterMark: 'Expression de requête',
                            nameFieldWaterMark: 'Nom de l\'expression',
                            closeToolTip: 'Fermer',
                            errorMessage: {
                                saveAlert: 'L\'expression n\'est pas enregistrée. Voulez-vous enregistrer et continuer?',
                                bracketSyntax: 'Syntaxe incorrecte près des parenthèses d\'ouverture / fermeture.',
                                parseAlert: 'ReportDesigner n\'a pas réussi à analyser l\'expression spécifiée.',
                                nameAlert: 'Le champ Nom ne doit pas être vide.',
                                emptyAlert: 'Le champ d\'expression ne doit pas être vide',
                                duplicateName: 'Le nom d\'expression spécifié existe déjà',
                                specialCharacter: 'Le nom d\'expression ne doit pas contenir de caractères spéciaux.',
                                referenceError: 'La colonne ne peut pas être référée dans sa propre expression!',
                                invalidSyntax: 'Syntaxe invalide près des parenthèses ouvertes / fermées.',
                                retrieveExpression: 'ReportDesigner n\'a pas réussi à récupérer l\'expression spécifiée'
                            },
                            datasetTitle: 'DataSet',
                            expressions: {
                                all: 'Tout',
                                numbers: 'Nombres',
                                logical: 'Logique',
                                conditional: 'Conditionnel',
                                date: 'Rendez-vous amoureux',
                                stringType: 'Chaîne',
                                text: 'Texte',
                                miscellenuous: 'Divers ',
                                abs: 'Renvoie la valeur absolue de l\'expression donnée.',
                                acos: 'Renvoie le cosinus inverse (également appelé arccosine) de l\'expression numérique donnée.',
                                asin: 'Renvoie le sinus inverse (également appelé arcsine) de l\'expression numérique donnée.',
                                atan: 'Renvoie la tangente inverse (également appelée arctangente) de l\'expression numérique donnée.',
                                cos: 'Renvoie le cosinus de l\'angle spécifié en radians de l\'expression donnée.',
                                degree: 'Renvoie l\'angle en degrés pour celui spécifié en radians de l\'expression numérique donnée.',
                                exponent: 'Renvoie la valeur exponentielle de l\'expression donnée. ',
                                logrithm: 'Renvoie le logarithme de l\'expression donnée à la base spécifiée.',
                                pi: 'Renvoie la valeur constante de PI.',
                                power: 'Renvoie la valeur de l\'expression donnée (expression1) à la puissance spécifiée (expression2). ',
                                radians: 'Renvoie l\'angle en radians pour celui qui est spécifié en degrés dans l\'expression numérique donnée.',
                                round: 'Renvoie une valeur arrondie.',
                                sign: 'Renvoie une valeur représentant le signe positif (+1), zéro (0) ou négatif (-1) de l\'expression numérique donnée.',
                                sin: 'Renvoie le sinus de l\'angle spécifié en radians de l\'expression donnée.',
                                squareRoot: 'Renvoie la racine carrée de l\'expression numérique donnée.',
                                tan: 'Renvoie la tangente de l\'expression numérique donnée.',
                                ifCondition: 'Renvoie la partie vraie ou la partie fausse, en fonction de l\'évaluation de l\'expression.',
                                ifNull: 'Si l\'expression est numérique / chaîne / date, renvoie la première expression. Si la première expression est NULL, renvoie la deuxième expression.',
                                isNotNull: 'Si la valeur numeric / string / date_expression est NULL, renvoie une chaîne représentant false; sinon représente true.',
                                isNull: 'Si la valeur numeric / string / date_expression est NULL, renvoie une chaîne représentant true; sinon représente false.',
                                and: 'Renvoie true si les deux expressions sont vraies.',
                                notOperation: 'Renvoie la valeur logique d\'inversion de l\'expression en cours d\'évaluation.',
                                orOperation: 'Renvoie true si l\'une des expressions est évaluée à true.',
                                addDate: 'Ajoute le nombre de jours à la date spécifiée.',
                                name: 'Renvoie une chaîne représentant la partie date spécifiée de l\'expression de date donnée.',
                                part: 'Renvoie une valeur entière représentant la partie de date spécifiée de l\'expression de date donnée.',
                                sub: 'Renvoie la date soustraite de la date spécifiée.',
                                day: 'Retourne une valeur numérique représentant la partie jour de la date spécifiée.',
                                daydiff: 'Renvoie une valeur numérique représentant la différence entre deux dates spécifiées.',
                                hour: 'Renvoie l\'heure de la date donnée en entier.',
                                maximum: 'Renvoie la valeur maximale dans l\'expression donnée.',
                                minimum: 'Renvoie la valeur minimale dans l\'expression donnée.',
                                minute: 'Renvoie une valeur numérique représentant la partie minute de la date résultant de l\'expression de date spécifiée.',
                                month: 'Renvoie une valeur numérique représentant la partie mois de la date résultant de l\'expression de date spécifiée.',
                                now: 'Renvoie la date et l\'heure actuelles.',
                                today: 'Renvoie la date actuelle.',
                                year: 'Renvoie une valeur numérique représentant la partie année de la date résultant de l\'expression de date spécifiée.',
                                char: 'Convertit le code ASCII entier donné en caractère.',
                                concat: 'Renvoie une valeur de chaîne résultant de la concaténation de deux valeurs de chaîne ou plus.',
                                contains: 'Renvoie true si l\'expression de chaîne donnée contient l\'expression de sous-chaîne spécifiée.',
                                endsWith: 'Renvoie true si l\'expression de chaîne donnée se termine avec l\'expression de sous-chaîne spécifiée.',
                                left: 'Renvoie le nombre de caractères spécifié à partir du début de l\'expression de chaîne donnée.',
                                length: 'Renvoie le logarithme naturel de l\'expression donnée.',
                                lower: 'Renvoie une valeur de chaîne convertie en minuscule à partir d\'la expression de chaîne donnée.',
                                leftTrim: 'Renvoie la valeur de chaîne avec les espaces vides supprimés de l\'expression de chaîne.',
                                right: 'Renvoie le nombre de caractères spécifié à la fin de l\'expression de chaîne donnée.',
                                rightTrim: 'Renvoie la chaîne sans les espaces de fin du côté droit dans la chaîne donnée.',
                                startswith: 'Renvoie true si les expressions de chaîne données commencent par l\'expression de sous-chaîne spécifiée.',
                                subString: 'Renvoie une longueur de chaîne spécifique à partir de l\'index spécifique de l\'expression de chaîne donnée.',
                                upper: 'Renvoie une valeur de chaîne convertie majuscule à partir d\'une expression de chaîne donnée.'
                            }
                        }
                    }
                };
                break;
            case "ejRibbon":
                ej.Ribbon.Locale = ej.Ribbon.Locale || {};
                ej.Ribbon.Locale["fr-FR"] = {
                    CustomizeQuickAccess: "Personnaliser d'outils Accès rapide",
                    RemoveFromQuickAccessToolbar: "Retirer de la barre d'outils Accès rapide",
                    AddToQuickAccessToolbar: "Ajouter à outils Accès rapide",
                    ShowAboveTheRibbon: "Montrez-dessus du ruban",
                    ShowBelowTheRibbon: "Afficher en dessous du ruban",
                    MoreCommands: "Plus de commandes ..."
                };
                break;
            case "ejKanban":
                ej.Kanban.Locale = ej.Kanban.Locale || {};
                ej.Kanban.Locale["fr-FR"] = {
                    EmptyCard: "Pas de cartes pour afficher",
                    SaveButton: "Sauvegarder",
                    CancelButton: "Annuler",
                    EditFormTitle: "Détails de ",
                    AddFormTitle: "Ajouter nouvelle carte",
                    SwimlaneCaptionFormat: "- {{:count}}{{if count == 1 }} Point {{else}} Articles {{/if}}",
                    FilterSettings: "Filters:",
                    FilterOfText: "De",
                    Max: "Max",
                    Min: "Min",
                    Cards: "  Cartes",
                    ItemsCount: "Nombre d'éléments :",
                    Unassigned: "Non attribué",
                    AddCard: "Ajouter une carte",
                    EditCard: "Modifier la carte",
                    DeleteCard: "Supprimer la carte",
                    TopofRow: "Haut de la page",
                    BottomofRow: "Fond de la rangée",
                    MoveUp: "Déplacer vers le haut",
                    MoveDown: "Descendre",
                    MoveLeft: "Se déplacer à gauche",
                    MoveRight: "Déplacer vers la droite",
                    MovetoSwimlane: "Déplacer vers Swimlane",
                    HideColumn: "Masquer la colonne",
                    VisibleColumns: "Colonnes visibles",
                    PrintCard: "Imprimer la carte"
                };
                break;
            case "ejRTE":
                ej.RTE.Locale = ej.RTE.Locale || {};
                ej.RTE.Locale["fr-FR"] = {
                    bold: "Audacieux",
                    italic: "Italique",
                    underline: "Souligner",
                    strikethrough: "Barré",
                    superscript: "Superscript",
                    subscript: "Indice",
                    justifyCenter: "Aligner le centre de texte",
                    justifyLeft: "Aligner le texte à gauche",
                    justifyRight: "Aligner le texte à droite",
                    justifyFull: "Justifier",
                    unorderedList: "Insérer une liste non ordonnée",
                    orderedList: "Insérer une liste ordonnée",
                    indent: "Augmenter le retrait",
                    fileBrowser: "Navigateur de fichiers",
                    outdent: "Diminuer le retrait",
                    cut: "Coupe",
                    copy: "Copie",
                    paste: "Pâte",
                    paragraph: "Paragraphe",
                    undo: "annuler",
                    redo: "Refaire",
                    upperCase: "Haut de casse",
                    lowerCase: "minuscule",
                    clearAll: "Tout effacer",
                    clearFormat: "Effacer le format",
                    createLink: "Insérer / Modifier le lien hypertexte",
                    removeLink: "Supprimer le lien hypertexte",
                    tableProperties: "Propriétés du tableau",
                    insertTable: "Insérer",
                    deleteTables: "Effacer",
                    imageProperties: "Propriétés de l'image",
                    openLink: "Ouvrir l'hyperlien",
                    image: "Insérer une image",
                    video: "Insérer une vidéo",
                    editTable: "Modifier les propriétés du tableau",
                    embedVideo: "Collez votre code d'intégration ci-dessous",
                    viewHtml: "Afficher le code HTML",
                    fontName: "Sélectionner la famille de polices",
                    fontSize: "Choisir la taille des caractères",
                    fontColor: "Choisissez la couleur",
                    format: "Format",
                    backgroundColor: "Couleur de fond",
                    style: "modes",
                    deleteAlert: "Voulez-vous vraiment effacer tout le contenu?",
                    copyAlert: "Votre navigateur ne supporte pas l'accès direct au presse-papiers. Veuillez utiliser le raccourci clavier Ctrl + C au lieu de copier.",
                    pasteAlert: "Votre navigateur ne supporte pas l'accès direct au presse-papiers. Veuillez utiliser le raccourci clavier Ctrl + V plutôt que de coller.",
                    cutAlert: "Votre navigateur ne supporte pas l'accès direct au presse-papiers. Veuillez utiliser le raccourci clavier Ctrl + X au lieu de couper.",
                    videoError: "La zone de texte ne peut pas être vide",
                    imageWebUrl: "Adresse web",
                    imageAltText: "Texte alternatif",
                    dimensions: "Dimensions",
                    constrainProportions: "Limiter les proportions",
                    linkWebUrl: "Adresse web",
                    imageLink: "Image comme lien",
                    imageBorder: "Bordure d'image",
                    imageStyle: "style",
                    linkText: "Texte",
                    linkTooltipLabel: "info-bulle",
                    html5Support: "Cette icône d'outil n'est activée que dans les navigateurs compatibles HTML5",
                    linkOpenInNewWindow: "Ouvre le lien dans une nouvelle fenêtre",
                    tableColumns: "Nombre de colonnes",
                    tableRows: "Nombre de rangées",
                    tableWidth: "Largeur",
                    tableHeight: "la taille",
                    tableCellSpacing: "Cellspacing",
                    tableCellPadding: "Cellpadding",
                    tableBorder: "Frontière",
                    tableCaption: "Légende",
                    tableAlignment: "Alignement",
                    textAlign: "Alignement du texte",
                    dialogUpdate: "Mettre à jour",
                    dialogInsert: "Insérer",
                    dialogCancel: "Annuler",
                    dialogApply: "Appliquer",
                    dialogOk: "D'accord",
                    createTable: "Insérer une table",
                    insertTable: "Insérer",
                    addColumnLeft: "Insérer des colonnes à gauche",
                    addColumnRight: "Insérer des colonnes à droite",
                    addRowAbove: "Insérer les lignes ci-dessus",
                    addRowBelow: "Insérer des lignes ci-dessous",
                    deleteRow: "Supprimer toute la ligne",
                    deleteColumn: "Supprimer la colonne entière",
                    deleteTable: "Supprimer la table",
                    customTable: "Créer une table personnalisée ...",
                    characters: "Personnages",
                    words: "Mots",
                    general: "Général",
                    advanced: "Avancée",
                    table: "Table",
                    row: "Rangée",
                    column: "Colonne",
                    cell: "Cellule",
                    solid: "Solide",
                    dotted: "Pointé",
                    dashed: "Dégradé",
                    doubled: "Double",
                    maximize: "Maximiser",
                    resize: "Minimiser",
                    swatches: "Échantillons",
                    paragraph: "Paragraphe",
                    quotation: "Citation",
                    heading1: "Rubrique 1",
                    heading2: "Rubrique 2",
                    heading3: "Rubrique 3",
                    heading4: "Rubrique 4",
                    heading5: "Rubrique 5",
                    heading6: "Rubrique 6",
                    segoeui: "Segoe UI",
                    arial: "Arial",
                    couriernew: "Courier Nouveau",
                    georgia: "Géorgie",
                    impact: "Impact",
                    lucidaconsole: "Console Lucida",
                    tahoma: "Tahoma",
                    timesnewroman: "Times New Roman",
                    trebuchetms: "Trebuchet MS",
                    verdana: "Verdana",
                    disc: "Disque",
                    circle: "Cercle",
                    square: "Carré",
                    number: "Nombre",
                    loweralpha: "Alpha inférieur",
                    upperalpha: "Alpha supérieur",
                    lowerroman: "Bas-Romain",
                    upperroman: "Haut romain",
                    none: "Aucun",
                    linkTooltip: "Ctrl + clic pour suivre le lien",
                    charSpace: "Caractères (avec espaces)",
                    charNoSpace: "Caractères (sans espaces)",
                    wordCount: "Nombre de mots",
                    left: "À gauche",
                    right: "Droite",
                    center: "centre",
                    zoomIn: "agrandir",
                    zoomOut: "Dézoomer",
                    print: "Impression",
                    wordExport: "Exporter en tant que document Word",
                    pdfExport: "Exporter en tant que fichier PDF",
                    FindAndReplace: "Trouver et remplacer",
                    Find: "Trouver",
                    MatchCase: "Cas de correspondance",
                    WholeWord: "Mot entier",
                    ReplaceWith: "Remplacer par",
                    Replace: "Remplacer",
                    ReplaceAll: "Remplace tout",
                    FindErrorMsg: "Impossible de trouver le mot spécifié.",
                    customFontColor: "Plus de couleurs...",
                    customBGColor: "Plus de couleurs...",
                    TransBGColor: "Transparent",
                    addtodictionary: "Ajouter au dictionnaire",
                    ignoreall: "ignorer tout"

                };
                break;
            case "ejRecurrenceEditor":
                ej.RecurrenceEditor.Locale = ej.RecurrenceEditor.Locale || {};
                ej.RecurrenceEditor.Locale["fr-FR"] = {
                    Repeat: "Répéter",
                    Never: "Jamais",
                    Daily: "Tous les jours",
                    Weekly: "Hebdomadaire",
                    Monthly: "Mensuel",
                    Yearly: "Annuel",
                    First: "Premier",
                    Second: "Seconde",
                    Third: "Troisième",
                    Fourth: "Quatrième",
                    Last: "Dernier",
                    EveryWeekDay: "Tous les jours de la semaine",
                    Every: "Chaque",
                    RecurrenceDay: "Journées",
                    RecurrenceWeek: "Semaines",
                    RecurrenceMonth: "Mois",
                    RecurrenceYear: "Années",
                    RepeatOn: "Répéter l'opération sur",
                    RepeatBy: "Répéter par",
                    StartsOn: "Démarre sur",
                    Times: "fois",
                    Ends: "Prend fin",
                    Day: "journée",
                    The: "le",
                    OfEvery: "De",
                    After: "Après",
                    On: "Sur",
                    Occurrence: "Occurrences",
                    Until: "Jusqu'à"
                };
                break;
            case "ejSchedule":
                ej.Schedule.Locale = ej.Schedule.Locale || {};
                ej.Schedule.Locale["fr-FR"] = {
                    ReminderWindowTitle: "fenêtre Rappel",
                    CreateAppointmentTitle: "Créer un rendez",
                    RecurrenceEditTitle: "Modifier Répéter rendez-vous",
                    RecurrenceEditMessage: "Comment voulez-vous changer le rendez-vous dans la série?",
                    RecurrenceEditOnly: "Seulement cette nomination",
                    RecurrenceEditFollowingEvent: "Événements suivants",
                    RecurrenceEditSeries: "La série entière",
                    PreviousAppointment: "Nomination précédente",
                    NextAppointment: "Prochain rendez-vous",
                    AppointmentSubject: "Assujettir",
                    StartTime: "Heure de départ",
                    EndTime: "Heure de fin",
                    AllDay: "Toute la journée",
                    StartTimeZone: "Démarrez TimeZone",
                    EndTimeZone: "End Time Zone",
                    Today: "Aujourd'hui",
                    Recurrence: "Répéter",
                    Done: "Terminé",
                    Cancel: "Annuler",
                    Ok: "D'accord",
                    Repeat: "Répéter",
                    RepeatBy: "Répéter par",
                    RepeatEvery: "Répéter chaque",
                    RepeatOn: "Répéter l'opération sur",
                    StartsOn: "Démarre sur",
                    Ends: "Prend fin",
                    Summary: "Résumé",
                    Daily: "Tous les jours",
                    Weekly: "Hebdomadaire",
                    Monthly: "Mensuel",
                    Yearly: "Annuel",
                    Every: "Chaque",
                    EveryWeekDay: "Tous les jours de la semaine",
                    Never: "Jamais",
                    After: "Après",
                    Occurrence: "Occurrences",
                    On: "Sur",
                    Edit: "modifier",
                    RecurrenceDay: "Journées",
                    RecurrenceWeek: "Semaines",
                    RecurrenceMonth: "Mois",
                    RecurrenceYear: "Années",
                    The: "le",
                    OfEvery: "de toute",
                    First: "Premier",
                    Second: "Seconde",
                    Third: "Troisième",
                    Fourth: "Quatrième",
                    Last: "Dernier",
                    WeekDay: "Jour de la semaine",
                    WeekEndDay: "Jour de weekend",
                    Subject: "Assujettir",
                    Categorize: "Catégories",
                    DueIn: "Dû en",
                    DismissAll: "Rejeter la totalité",
                    Dismiss: "Rejeter",
                    OpenItem: "Élément ouvert",
                    Snooze: "Roupillon",
                    Day: "journées",
                    Week: "Semaine",
                    WorkWeek: "Semaine de travail",
                    Month: "Mois",
                    AddEvent: "Ajouter un évènement",
                    CustomView: "Vue personnalisée",
                    Agenda: "Ordre du jour",
                    Detailed: "Modifier Rendez-vous",
                    EventBeginsin: "Nomination commence dans",
                    Editevent: "Modifier Rendez-vous",
                    Editfollowingevent: "Événements suivants",
                    Editseries: "Modifier la série",
                    Times: "fois",
                    Until: "jusqu'à",
                    Eventwas: "Rendez-vous était",
                    Hours: "hrs",
                    Minutes: "mins",
                    Overdue: "Nomination Overdue",
                    Days: "journées)",
                    Event: "un événement",
                    Select: "sélectionner",
                    Previous: "précédent",
                    Next: "Prochain",
                    Close: "Fermer",
                    Delete: "Effacer",
                    Date: "date",
                    Showin: "Montre",
                    Gotodate: "Aller à la date",
                    Resources: "RESSOURCES",
                    RecurrenceDeleteTitle: "Supprimer Répéter rendez-vous",
                    Location: "Emplacement",
                    Priority: "Priorité",
                    RecurrenceAlert: "Alerte",
                    NoTitle: "Pas de titre",
                    OverFlowAppCount: "plus de nominations",
                    AppointmentIndicator: "Cliquez pour plus de rendez-vous",
                    WrongPattern: "Le modèle de récurrence est pas valide",
                    CreateError: "La durée de la nomination doit être plus courte que la fréquence elle se produit. Raccourcir la durée, ou modifier le modèle de récurrence dans la boîte de dialogue Récurrence de rendez.",
                    DragResizeError: "Vous ne pouvez pas reporter une occurrence du rendez-vous périodique si elle saute sur une occurrence ultérieure du même rendez-vous.",
                    StartEndError: "L'heure de fin doit être supérieure à l'heure de début",
                    MouseOverDeleteTitle: "Supprimer Nomination",
                    DeleteConfirmation: "Êtes-vous sûr de vouloir supprimer ce rendez-vous?",
                    Time: "Temps",
                    EmptyResultText: "Pas de suggestions",
                    BlockIntervalAlertTitle: "Alerte",
                    BlockIntervalError: "L'intervalle de temps choisi a été bloqué et est indisponible pour la sélection.",
                    RecurrenceDateValidation: "Certains mois ont moins de dates sélectionnées. Pour ces mois, l'occurrence tombera à la dernière date du mois",
                    SeriesChangeAlert: "Les modifications apportées aux instances spécifiques de cette série seront annulées et ces rendez-vous seront identiques à la série"
                };
                break;
            case "ejSpreadsheet":
                ej.Spreadsheet.Locale = ej.Spreadsheet.Locale || {};
                ej.Spreadsheet.Locale["fr-FR"] = {
                    Cut: "Coupe",
                    Copy: "Copie",
                    FormatPainter: "Format Painter",
                    Paste: "Pâte",
                    PasteValues: "Coller Valeurs uniquement",
                    PasteSpecial: "Pâte",
                    Filter: "Filtre",
                    FilterContent: "Allumez le filtrage pour les cellules sélectionnées.",
                    FilterSelected: "Filtrer par la valeur de cellule sélectionnée",
                    Sort: "Trier",
                    Clear: "Clair",
                    ClearContent: "Supprimer tout dans la cellule, ou supprimer seulement la mise en forme, le contenu, des commentaires ou des hyperliens.",
                    ClearFilter: "Effacer le filtre",
                    ClearFilterContent: "Effacer le filtre et trier l'état de la gamme actuelle de données.",
                    SortAtoZ: "Trier A à Z",
                    SortAtoZContent: "Les plus bas.",
                    SortZtoA: "Trier Z à A",
                    SortZtoAContent: "Plus haut au plus bas.",
                    SortSmallesttoLargest: "Trier petit au plus grand",
                    SortLargesttoSmallest: "Trier grand au plus petit",
                    SortOldesttoNewest: "Trier ancien au plus récent",
                    SortNewesttoOldest: "Trier récent au plus ancien",
                    Insert: "Insérer",
                    InsertTitle: "Les cellules d'insertion",
                    InsertContent: "Ajouter de nouvelles cellules, des lignes ou des colonnes à votre classeur",
                    MultipleInsertContent: " FYI:. Pour insérer plusieurs lignes ou colonnes à la fois, sélectionnez plusieurs lignes ou colonnes dans la feuille, puis cliquez sur Insérer.",
                    InsertSBContent: "Ajouter des cellules, des lignes, des colonnes ou des feuilles à votre classeur.",
                    Delete: "Effacer",
                    DeleteTitle: "Supprimer les cellules",
                    DeleteContent: "Supprimer des cellules, des lignes, des colonnes ou des feuilles de votre classeur",
                    MultipleDeleteContent: " FYI:. Pour supprimer plusieurs lignes ou colonnes à la fois, sélectionnez plusieurs lignes ou colonnes dans la feuille, puis cliquez sur Supprimer.",
                    FindSelectTitle: "Trouvez et sélectionnez",
                    FindSelectContent: "Cliquez pour voir les options de recherche de texte dans votre document.",
                    CalculationOptions: "Options de calcul",
                    CalcOptTitle: "Options de calcul",
                    CalcOptContent: "Choisissez pour calculer des formules automatiquement ou manuellement. ",
                    CalcOptRecalcContent: " Si vous faites un changement qui affecte une valeur, une feuille de calcul sera automatiquement recalculer.",
                    CalculateSheet: "Calculer Fiche",
                    CalculateNow: "Calculer maintenant",
                    CalculateNowContent: "Calculer le classeur entier maintenant. ",
                    CalculateNowTurnOffContent: " Vous avez seulement besoin d'utiliser cette option si le calcul automatique est désactivé.",
                    CalculateSheetContent: "Calculer la feuille active maintenant. ",
                    CalculateSheetTurnOffContent: " Vous avez seulement besoin d'utiliser cette option si le calcul automatique est désactivé.",
                    Title: "Tableur",
                    ColorPicker: "Pipette à couleurs",
                    Ok: "D'accord",
                    Cancel: "Annuler",
                    Alert: "Nous ne pouvions pas faire cela pour la plage de cellules sélectionnée. Sélectionnez une seule cellule dans une plage de données, puis essayez à nouveau.",
                    HeaderAlert: "La commande n'a pas pu être terminée que vous essayez de filtrer avec l'en-tête de filtre. Sélectionnez une seule cellule dans la gamme de filtres et d'essayer à nouveau la commande.",
                    FlashFillAlert: "Toutes les données à côté de votre sélection a été vérifié et il n'y avait pas de modèle pour le remplissage des valeurs.",
                    Formatcells: "Format de cellule",
                    FontFamily: "Police de caractère",
                    FFContent: "Choisissez une nouvelle police pour votre texte.",
                    FontSize: "Taille de police",
                    FSContent: "Modifier la taille de votre texte.",
                    IncreaseFontSize: "Augmenter la taille de police",
                    IFSContent: "Faites votre texte un peu plus grand.",
                    DecreaseFontSize: "Diminuer la taille",
                    DFSContent: "Faites votre texte un peu plus petit.",
                    Bold: "Audacieux",
                    Italic: "Italique",
                    Underline: "Souligner",
                    Linethrough: "Ligne à travers",
                    FillColor: "La couleur de remplissage",
                    FontColor: "Couleur de la police",
                    TopAlign: "Top Align",
                    TopAlignContent: "Aligner le texte vers le haut.",
                    MiddleAlign: "Moyen Aligner",
                    MiddleAlignContent: "Aligner le texte de sorte qu'il soit centré entre le haut et le bas de la cellule.",
                    BottomAlign: "Aligner en bas",
                    BottomAlignContent: "Aligner le texte vers le bas.",
                    WrapText: "Wrap Text",
                    WrapTextContent: "Enveloppez texte extra-long en plusieurs lignes de sorte que vous pouvez voir tout cela.",
                    AlignLeft: "Alignez à gauche",
                    AlignLeftContent: "Alignez votre contenu vers la gauche.",
                    AlignCenter: "centre",
                    AlignCenterContent: "Centre de votre contenu.",
                    AlignRight: "Aligner à droite",
                    AlignRightContent: "Alignez votre contenu à droite.",
                    IncreaseIndent: "Augmenter le retrait",
                    IncreaseIndentContent: "Déplacez votre contenu plus loin de la bordure de la cellule.",
                    DecreaseIndent: "Diminuer le retrait",
                    DecreaseIndentContent: "Déplacez votre contenu vers la bordure de la cellule.",
                    Undo: "annuler",
                    Redo: "Refaire",
                    NumberFormat: "Nombre Format",
                    NumberFormatContent: "Choisissez le format de vos cellules, telles que le pourcentage, la monnaie, la date ou l'heure.",
                    AccountingStyle: "Style de comptabilité",
                    AccountingStyleContent: "Format comme format de numéro de comptabilité de dollar.",
                    PercentageStyle: "pour cent style",
                    PercentageStyleContent: "Format en pour cent.",
                    CommaStyle: "style de Comma",
                    CommaStyleContent: "Format sans séparateur de milliers.",
                    IncreaseDecimal: "Augmenter Decimal",
                    IncreaseDecimalContent: "Afficher plus décimales pour une valeur plus précise.",
                    DecreaseDecimal: "Diminution Decimal",
                    DecreaseDecimalContent: "Moins de décimales.",
                    AutoSum: "AutoSum",
                    AutoSumTitle: "Somme",
                    AutoSumContent: "Ajouter automatiquement un calcul rapide à votre feuille de calcul, comme somme ou la moyenne.",
                    Fill: "Remplir",
                    ExportXL: "Exceller",
                    ExportCsv: "CSV",
                    ExportPdf: "PDF",
                    BackgroundColor: "La couleur de remplissage",
                    BGContent: "Couleur de l'arrière-plan des cellules pour les faire ressortir.",
                    ColorContent: "Changer la couleur de votre texte.",
                    Border: "Frontière",
                    BorderContent: "Appliquer des bordures aux cellules sélectionnées.",
                    BottomBorder: "Border Bottom",
                    TopBorder: "Top Border",
                    LeftBorder: "Left Border",
                    RightBorder: "Bordure droite",
                    OutsideBorder: "frontières extérieures",
                    NoBorder: "Pas de frontière",
                    AllBorder: "Toutes les frontières",
                    ThickBoxBorder: "Thick Box Border",
                    ThickBottomBorder: "Thick Border Bottom",
                    TopandThickBottomBorder: "Haut et épais Border Bottom",
                    BottomDoubleBorder: "Double bordurer",
                    TopandBottomDoubleBorder: "Haut et bas Double frontière",
                    DrawBorderGrid: "Dessinez Border Grille",
                    DrawBorder: "Dessinez Border",
                    TopandBottomBorder: "Top and Border Bottom",
                    BorderColor: "Color line",
                    BorderStyle: "Style de ligne",
                    Number: "Nombre est utilisé pour l'affichage général des numéros. Monnaie et offre de comptabilité spécialisée mise en forme de valeur monétaire.",
                    General: "cellules générales format ont pas de format de numéro spécifique.",
                    Currency: "formats de devises sont utilisés pour les valeurs monétaires générales. Utilisez des formats comptables pour aligner les points décimaux dans une colonne.",
                    Accounting: "formats comptables alignent les symboles monétaires et les décimales dans une colonne.",
                    Text: "cellules de format de texte sont traités comme du texte, même si un nombre est dans la cellule. La cellule est affiché exactement comme entré.",
                    Percentage: "formats Pourcentage multiplient la valeur de la cellule par 100 et affiche le résultat avec un symbole pour cent.",
                    CustomMessage: "Tapez le code de format numérique, en utilisant un code existant comme point de départ.",
                    Fraction: " ",
                    Scientific: " ",
                    Type: "Type:",
                    CustomFormatAlert: "Entrez un format valide",
                    Date: "Les formats de date afficher date et l'heure des numéros de série que les valeurs de date.",
                    Time: "Heure formats date d'affichage et les numéros de série de temps que les valeurs de date.",
                    File: "FICHIER",
                    New: "Nouveau",
                    Open: "Ouvrir",
                    SaveAs: "Enregistrer sous",
                    Print: "Impression",
                    PrintContent: "Imprimer la feuille courante.",
                    PrintSheet: "Imprimer Fiche",
                    PrintSelected: "Imprimer sélectionné",
                    PrintSelectedContent: "Sélectionnez une zone sur la feuille que vous souhaitez imprimer.",
                    HighlightVal: "Format de données non valide",
                    ClearVal: "Effacer validation",
                    Validation: "Validation",
                    DataValidation: "La validation des données",
                    DVContent: "Choisissez parmi une liste de règles pour limiter le type de données qui peuvent être saisies dans une cellule.",
                    PageSize: "Taille de la page",
                    PageSizeContent: "Choisissez un format de page pour votre document.",
                    FormatCells: "Format de cellule",
                    ConditionalFormat: "Mise en forme conditionnelle",
                    CFContent: "repérer facilement les tendances et les modèles dans vos données en utilisant des couleurs pour mettre en évidence visuellement des valeurs importantes.",
                    And: "et",
                    With: "avec",
                    GTTitle: "Plus grand que",
                    GTContent: "Format des cellules qui sont supérieures à:",
                    LTTitle: "Moins que",
                    LTContent: "Format des cellules qui sont inférieures à:",
                    BWTitle: "Entre",
                    BWContent: "Format des cellules qui sont entre:",
                    EQTitle: "Égal à",
                    EQContent: "Format des cellules qui doivent EQUAL:",
                    DateTitle: "A Date Survenant",
                    DateContent: "Format des cellules qui contiennent une DATE:",
                    ContainsTitle: "Texte qui contient",
                    ContainsContent: "Format des cellules qui contiennent le texte:",
                    GreaterThan: "Plus grand que",
                    LessThan: "Moins que",
                    Between: "Entre",
                    EqualTo: "Égal à",
                    TextthatContains: "Texte qui contient",
                    DateOccurring: "A Date Survenant",
                    ClearRules: "Des règles claires",
                    ClearRulesfromSelected: "Des règles claires de cellules sélectionnées",
                    ClearRulesfromEntireSheets: "Des règles claires de feuille entière",
                    CellStyles: "Styles de cellule",
                    CellStylesContent: "Un style coloré est un excellent moyen de rendre les données importantes se détachent sur la feuille.",
                    CellStyleHeaderText: "Bon, mauvais et neutre / Titres et rubriques / à thème Styles de cellule",
                    Custom: "Tapez le code de format numérique, en utilisant l'un des codes existants comme point de départ.",
                    CellStyleGBN: "Normale / Bad / Good / Neutre",
                    CellStyleTH: "Rubrique 4 / Titre",
                    Accent: "accent",
                    Style: "style",
                    FormatAsTable: "Format Comme le tableau",
                    FormatasTable: "Sous forme de tableau",
                    FATContent: "Rapidement convertir une plage de cellules à une table avec son propre style.",
                    FATHeaderText: "Léger / Moyen / Dark",
                    FATNameDlgText: "Nom de la table: / Ma table a en-têtes",
                    InvalidReference: "La gamme que vous avez spécifié est invalide",
                    ResizeAlert: "La plage spécifiée est invalide. Le dessus de la table doit rester dans la même rangée, et la table résultante doit chevaucher la table d'origine. Spécifiez une plage valide.",
                    RangeNotCreated: "L'augmentation de la ligne au-delà du nombre maximal feuille de ligne est limitée dans le format sous forme de tableau.",
                    ResizeRestrictAlert: "Augmentation ou diminution du nombre de colonnes et la diminution du nombre de lignes est limité dans le format sous forme de tableau.",
                    FATResizeTableText: "Entrez nouvelle gamme de données pour votre table:",
                    FATReizeTableNote: "Remarque: Les en-têtes doivent rester dans la même ligne et la gamme de table résultante doivent se chevaucher la plage de table d'origine.",
                    FormatAsTableAlert: "Vous ne pouvez pas créer une table avec une seule rangée. Une table doit avoir au moins deux rangées, une pour l'en-tête de table, et une pour les données",
                    FormatAsTableTitle: "Light 1 / Light 2 / Light 3 / Light 4 / Light 5 / Light 6 / Light 7 / Light 8 / Light 9 / Light 10 / Light 11 / Light 12 / Moyen 1 / Moyen 2 / Moyen 3 / Moyen 4 / Moyen 5 / moyen 6 / moyen 7 / moyen 8 / Dark 1 / Dark 2 / Dark 3 / Dark 4",
                    NewTableStyle: "Nouveau style de tableau",
                    ResizeTable: "Redimensionner Table",
                    ResizeTableContent: "Redimensionner cette table en ajoutant ou supprimant des lignes et des colonnes.",
                    ConvertToRange: "Convertir en Range",
                    ConvertToRangeContent: "Convertissez cette table dans une plage normale de cellules.",
                    ConverToRangeAlert: "Voulez-vous convertir la table pour une plage normale?",
                    TableID: "Tableau ID:",
                    Table: "Table",
                    TableContent: "Créer une table pour organiser et analyser les données connexes.",
                    TableStyleOptions: "Première colonne / Dernière Colonne / Total Ligne / Filtre Bouton",
                    Format: "Format",
                    NameManager: "Nom du gestionnaire",
                    NameManagerContent: "Créer, modifier, supprimer et trouver tous les noms utilisés dans le classeur.",
                    NameManagerFormulaContent: " Les noms peuvent être utilisés dans les formules comme substituts pour les références de cellules.",
                    DefinedNames: "noms définis",
                    DefineName: "Définir un nom",
                    DefineNameContent: "Définir et appliquer des noms.",
                    UseInFormula: "Utilisez Dans la formule",
                    UseInFormulaContent: "Choisissez un nom utilisé dans ce classeur et l'insérer dans la formule actuelle.",
                    RefersTo: "Fait référence à",
                    Name: "prénom",
                    Scope: "Portée",
                    NMNameAlert: "Le nom que vous avez entré est valid./Reason pour ce qui peut inclure: / Le nom ne commence pas par une lettre ou un trait de soulignement / Le nom contient un espace ou d'autres caractères non valides / Les conflits de noms avec une feuille de calcul intégré nom ou le nom d'un autre objet dans le classeur, // pas utilisé complètement",
                    NMUniqueNameAlert: "Le nom entré existe déjà. Entrez un nom unique.",
                    NMRangeAlert: "Entrez une plage valide",
                    FORMULAS: "FORMULES",
                    DataValue: "Valeurs:",
                    Value: "Valeurs",
                    Formula: "Formules",
                    MissingParenthesisAlert: "Votre formule manque un parenthesis--) ou (. Vérifiez la formule, puis ajoutez les parenthèses à l'endroit approprié.",
                    UnsupportedFile: "Unsupported File",
                    IncorrectPassword: "Impossible d'ouvrir le fichier ou feuille de calcul avec le mot de passe donné",
                    InvalidUrl: "S'il vous plaît spécifier une bonne URL",
                    Up: "en haut",
                    Down: "Vers le bas",
                    Sheet: "Feuille",
                    Workbook: "classeur",
                    Rows: "Par ligne",
                    Columns: "Par Colonnes",
                    FindReplace: "Trouver Remplacer",
                    FindnReplace: "Rechercher et remplacer",
                    Find: "Trouver",
                    Replace: "Remplacer",
                    FindLabel: "Trouver quoi:",
                    ReplaceLabel: "Remplacer par:",
                    ReplaceAll: "Remplace tout",
                    Close: "Fermer",
                    FindNext: "Trouver Suivant",
                    FindPrev: "Trouver Précédent",
                    Automatic: "Automatique",
                    Manual: "Manuel",
                    Settings: "Paramètres",
                    MatchCase: "Cas de correspondance",
                    MatchAll: "Faites correspondre le contenu des cellules entières",
                    Within: "Dans:",
                    Search: "Chercher:",
                    Lookin: "Regarder dans:",
                    ShiftRight: "cellules de décalage à droite",
                    ShiftBottom: "Décaler les cellules vers le bas",
                    EntireRow: "Ligne entière",
                    EntireColumn: "Colonne entière",
                    ShiftUp: "cellules de décalage vers le haut",
                    ShiftLeft: "cellules de décalage à gauche",
                    Direction: "Direction:",
                    GoTo: "Aller à",
                    GoToName: "Aller à:",
                    Reference: "Référence:",
                    Special: "Spécial",
                    Select: "Sélectionner",
                    Comments: "commentaires",
                    Formulas: "Formules",
                    Constants: "Constantes",
                    RowDiff: "les différences de rang",
                    ColDiff: "les différences de colonnes",
                    LastCell: "Dernière cellule",
                    CFormat: "Les formats conditionnels",
                    Blanks: "Blanks",
                    GotoError: "Erreur",
                    GotoLogicals: "Logicals",
                    GotoNumbers: "Nombres",
                    GotoText: "Texte",
                    FindSelect: "Trouvez et sélectionnez",
                    Comment: "Commentaire",
                    NewComment: "Nouveau",
                    InsertComment: "Insérer un commentaire",
                    EditComment: "modifier",
                    DeleteComment: "Supprimer le commentaire",
                    DeleteCommentContent: "Supprimer le commentaire sélectionné.",
                    HideComment: "Masquer le commentaire",
                    Next: "Prochain",
                    NextContent: "Aller au commentaire suivant.",
                    Previous: "précédent",
                    PreviousContent: "Aller au commentaire précédent.",
                    ShowHide: "Afficher / Masquer le commentaire",
                    ShowHideContent: "Afficher ou masquer le commentaire sur la cellule active.",
                    ShowAll: "Voir tous les commentaires",
                    ShowAllContent: "Afficher tous les commentaires dans la feuille.",
                    UserName: "Nom d'utilisateur",
                    Hide: "Cacher",
                    Unhide: "Démasquer",
                    Add: "Ajouter",
                    DropAlert: "Voulez-vous remplacer les données existantes?",
                    PutCellColor: "Mettez Selected Portable To The Top",
                    PutFontColor: "Put Selected Couleur de police To The Top",
                    WebPage: "Page web",
                    WorkSheet: "Feuille de référence",
                    SheetReference: "Fiche de référence",
                    InsertHyperLink: "Insérer un lien hypertexte",
                    HyperLink: "Hyperlink",
                    EditLink: "Modifier le lien",
                    OpenLink: "Ouvrir le lien",
                    HyperlinkText: "Texte:",
                    RemoveLink: "Supprimer le lien",
                    WebAddress: "Adresse web:",
                    CellAddress: "Référence de cellule:",
                    SheetIndex: "Choisissez un endroit dans ce document",
                    ClearAll: "Tout effacer",
                    ClearFormats: "Formats clairs",
                    ClearContents: "Effacer le contenu",
                    ClearComments: "Effacer Commentaires",
                    ClearHyperLinks: "Effacer hyperliens",
                    SortFilter: "Trier & filtrer",
                    SortFilterContent: "Organisez vos données de sorte qu'il est plus facile à analyser.",
                    NumberStart: "Le minimum:",
                    NumberEnd: "Maximum:",
                    DecimalStart: "Le minimum:",
                    DecimalEnd: "Maximum:",
                    DateStart: "Date de début:",
                    DateEnd: "Date de fin:",
                    ListStart: "La source:",
                    FreeText: "Alerte Afficher d'erreur après que les données non valide est entré",
                    ListEnd: "Référence de cellule:",
                    TimeStart: "Heure de départ:",
                    TimeEnd: "Heure de fin:",
                    TextLengthStart: "Le minimum:",
                    TextLengthEnd: "Maximum:",
                    CommentFindEndAlert: "Spreadsheet atteint la fin du classeur. Voulez-vous continuer à examiner depuis le début du classeur?",
                    InsertSheet: "Insérer",
                    DeleteSheet: "Effacer",
                    RenameSheet: "Rebaptiser",
                    MoveorCopy: "Déplacer ou copier",
                    HideSheet: "Cacher",
                    UnhideSheet: "Démasquer",
                    SheetRenameAlert: "Ce nom est déjà pris. Essayez un autre.",
                    SheetRenameEmptyAlert: "Vous avez tapé un nom non valide pour une feuille. Assurez-vous que: ",
                    SheetRenameEmptyCharExceedAlert: " Le nom que vous tapez ne dépasse pas 31 caractères ",
                    SheetRenameEmptySplCharAlert: " Le nom ne contient aucun des caractères suivants:",
                    SheetRenameEmptyBlankAlert: " Vous ne laissez pas le nom vide.",
                    SheetDeleteAlert: "Vous ne pouvez pas annuler la suppression de feuilles, et vous pourriez être la suppression des données. Si vous ne avez pas besoin, cliquez sur OK pour supprimer.",
                    SheetDeleteErrorAlert: "Un classeur doit contenir au moins une feuille de calcul visible. Pour masquer, supprimer ou déplacer la feuille sélectionnée, vous devez d'abord insérer une nouvelle feuille ou afficher une feuille qui est déjà caché.",
                    CtrlKeyErrorAlert: "Cette commande ne peut pas être utilisé sur plusieurs sélections.",
                    ClipboardAccessError: "Votre navigateur ne peut pas accéder au presse-papiers, utilisez ces raccourcis:",
                    MoveToEnd: "Aller à la fin",
                    Beforesheet: "Avant la feuille:",
                    CreateaCopy: "Créer une copie",
                    AutoFillOptions: "Cellules Copier / Remplir Série / Remplir la mise en forme uniquement / Remplir sans mise en forme / flash Fill",
                    NumberValidationMsg: "Entrez uniquement des chiffres",
                    DateValidationMsg: "Entrez seule date",
                    Required: "Obligatoire",
                    TimeValidationMsg: "Le temps que vous avez entré pour le temps est invalide.",
                    CellAddrsValidationMsg: "Référence est pas valide.",
                    PivotTable: "Pivot Table",
                    PivotTableContent: "Facilement organiser et de résumer les données complexes dans un tableau croisé dynamique.",
                    NumberTab: "Nombre",
                    AlignmentTab: "Alignement",
                    FontTab: "Police de caractère",
                    FillTab: "Remplir",
                    TextAlignment: "Alignement du texte",
                    Horizontal: "Horizontal:",
                    Vertical: "Verticale:",
                    Indent: "tiret",
                    TextControl: "Text Control",
                    FontGroup: "Police de caractère:",
                    FontStyle: "Le style de police:",
                    Size: "Taille:",
                    PSize: "Taille de la page",
                    Effects: "Effets:",
                    StrikeThrough: "Strikethrough",
                    Overline: "overline",
                    NormalFont: "police normale",
                    Preview: "Aperçu",
                    Line: "Ligne",
                    Presets: "Presets",
                    None: "Aucun",
                    Outline: "Contour",
                    AllSide: "Tous les côtés",
                    InsCells: "Les cellules d'insertion",
                    InsRows: "Insérer des lignes de la feuille",
                    InsCols: "Insérer des colonnes de la feuille",
                    InsSheet: "Insertion Feuille",
                    DelCells: "Supprimer les cellules",
                    DelRows: "Supprimer les lignes de la feuille",
                    DelCols: "Supprimer les colonnes de la feuille",
                    DelSheet: "Supprimer une feuille",
                    HyperLinkAlert: "L'adresse de ce site est pas valid.Check l'adresse et essayez à nouveau.",
                    ReplaceData: "Terminé. Nous avons fait / remplacements.",
                    NotFound: "Nous ne pouvions pas trouver ce que vous recherchez. Sélectionnez l'onglet Paramètres pour plus de moyens de recherche",
                    Data: "Données:",
                    Allow: "Permettre:",
                    IgnoreBlank: "Ignorer blanc",
                    NotFind: "Impossible de trouver le match pour remplacer",
                    FreezeTopRow: "Congeler Top Row",
                    FreezeFirstColumn: "Gel première colonne",
                    UnFreezePanes: "dégeler Panes",
                    DestroyAlert: "Etes-vous sûr de vouloir détruire le classeur en cours sans enregistrer et de créer un nouveau classeur?",
                    ImageValAlert: "Télécharger des fichiers d'image seulement",
                    Pictures: "Des photos",
                    PicturesTitle: "À partir du fichier",
                    PicturesContent: "Insérez des images de l'ordinateur ou d'autres ordinateurs que vous êtes connecté.",
                    ImportAlert: "Etes-vous sûr de vouloir détruire le classeur en cours sans enregistrer et ouvrir un nouveau classeur?",
                    UnmergeCells: "cellules Défusionner",
                    MergeCells: "Fusionner des cellules",
                    MergeAcross: "Fusionner Across",
                    MergeAndCenter: "Fusionner & Centre",
                    MergeAndCenterContent: "Combiner et centrer le contenu des cellules sélectionnées dans une nouvelle cellule plus grande.",
                    MergeCellsAlert: "Fusionner les cellules maintient la valeur de la cellule seulement supérieure gauche et rejette les autres valeurs.",
                    MergeInsertAlert: "Cette opération entraînera des cellules fusionnées à Unmerge. Souhaitez-vous continuer ?",
                    Axes: "Haches",
                    PHAxis: "Horizontal primaire",
                    PVAxis: "Vertical primaire",
                    AxisTitle: "Titre de l'axe",
                    CTNone: "Aucun",
                    CTCenter: "centre",
                    CTFar: "Loin",
                    CTNear: "Près",
                    DataLabels: "Étiquettes de données",
                    DLNone: "Aucun",
                    DLCenter: "centre",
                    DLIEnd: "Inside End",
                    DLIBase: "A l'intérieur de base",
                    DLOEnd: "Fin de l'extérieur",
                    ErrorBar: "Barres d'erreur",
                    Gridline: "Quadrillage",
                    PMajorH: "Primary Major Horizontal",
                    PMajorV: "Primary Major Vertical",
                    PMinorH: "Horizontal Minor primaire",
                    PMinorV: "Primary Major Vertical",
                    Legend: "Légendes",
                    LNone: "Aucun",
                    LLeft: "À gauche",
                    LRight: "Droite",
                    LBottom: "Bas",
                    LTop: "Meilleur",
                    ChartTitleDlgText: "Entrez le titre",
                    ChartTitle: "Titre",
                    InvalidTitle: "Vous avez tapé un nom invalide pour le titre.",
                    CorrectFormat: "Sélectionnez le format de fichier correct",
                    ResetPicture: "Rétablir l'image",
                    ResetPictureContent: "Jeter toutes les modifications de formatage apportées à cette image.",
                    PictureBorder: "Photo Border",
                    PictureBorderContent: "Choisissez la couleur, la largeur et le style de ligne pour le contour de votre forme.",
                    ResetSize: "Rétablir l'image et taille",
                    Height: "la taille",
                    Width: "Largeur",
                    ThemeColor: "Couleurs du thème",
                    NoOutline: "Non Outline",
                    Weight: "Poids",
                    Dashes: "tirets",
                    ColumnChart: "Colonne",
                    ColumnChartTitle: "Insérer une colonne graphique",
                    ColumnChartContent: "Utilisez ce type de graphique à des valeurs comparer visuellement à travers quelques catégories.",
                    BarChart: "Bar",
                    BarChartTitle: "Insérer Bar Chart",
                    BarChartContent: "Utilisez ce type de graphique à des valeurs comparer visuellement à travers quelques catégories lorsque le graphique montre la durée ou la catégorie texte est long.",
                    StockChart: "Radar",
                    StockChartTitle: "Insérez Radar Chart",
                    StockChartContent: "Utilisez ce type de graphique pour afficher les valeurs par rapport à un point central.",
                    LineChart: "Ligne",
                    LineChartTitle: "Insérer Graphique Ligne",
                    LineChartContent: "Utilisez ce type de graphique pour montrer les tendances au fil du temps (années, mois et jours) ou catégories.",
                    AreaChart: "Aire",
                    AreaChartTitle: "Graphique Insérer Zone",
                    AreaChartContent: "Utilisez ce type de graphique pour montrer les tendances au fil du temps (années, mois et jours) ou catégories. Utilisez-le pour mettre en évidence l'ampleur du changement au fil du temps.",
                    ComboChart: "Combo",
                    PieChart: "Tarte",
                    PieChartTitle: "Insérez Pie / Doughnut Chart",
                    PieChartContent: "Utilisez ce type de graphique pour illustrer les proportions d'un tout. Utilisez-le lorsque le total de vos numéros est de 100%.",
                    ScatterChart: "Dispersion",
                    ScatterChartTitle: "Insérer Scatter (X, Y) Graphique",
                    ScatterChartContent: "Utilisez ce type de graphique pour illustrer la relation entre les ensembles de valeurs.",
                    ClusteredColumn: "Cluster&nbsp;Colonne",
                    StackedColumn: "Stacked&nbsp;Colonne ",
                    ClusteredBar: "Cluster&nbsp;Bar",
                    StackedBar: "Stacked&nbsp;Bar",
                    Radar: "Radar",
                    RadarMarkers: "Radar&nbsp;largeur&nbsp;Marqueurs",
                    LineMarkers: "Line&nbsp;largeur& nbsp;Marqueurs",
                    Area: "Région",
                    StackedArea: "Stacked&nbsp;Zone",
                    Pie: "Tarte",
                    Doughnut: "Donut",
                    Scatter: "Dispersion",
                    ChartRange: "Range Chart",
                    XAxisRange: "Saisissez une fourchette de l'axe X:",
                    YAxisRange: "Saisissez une fourchette de l'axe Y:",
                    LegendRange: "Saisissez une fourchette de légende:",
                    YAxisMissing: "Saisissez une fourchette de l'axe Y pour créer tableau",
                    InvalidYAxis: "gamme de l'axe Y doit être comprise dans la plage sélectionnée",
                    InvalidXAxis: "plage d'axe X doit être comprise dans la plage sélectionnée",
                    InvalidLegend: "Plage de légende doit être comprise dans la plage sélectionnée",
                    InvalidXAxisColumns: "plage d'axe X doit se situer dans une seule colonne",
                    FreezePanes: "Figer les volets",
                    FreezePanesContent: "Gel d'une partie de la feuille pour le garder visible lorsque vous faites défiler le reste de la feuille.",
                    PasteContent: "Ajouter le contenu du Presse-papiers à votre document.",
                    PasteSplitContent: "Choisissez une option de collage, comme le maintien de la mise en forme ou de coller uniquement le contenu.",
                    CutContent: "Retirer la sélection et le mettre sur le Presse-papiers afin que vous puissiez le coller ailleurs.",
                    CopyContent: "Mettez une copie de la sélection sur le Presse-papiers afin que vous puissiez le coller ailleurs.",
                    FPTitle: "Format Painter",
                    FPContent: "Comme le regard d'une sélection particulière? Vous pouvez appliquer ce regard à d'autres contenus dans le document.",
                    BoldContent: "Faites votre texte en gras.",
                    ItalicContent: "Italique votre texte.",
                    ULineContent: "Soulignez votre texte.",
                    LineTrContent: "Traversez quelque chose en dessinant une grève à travers elle.",
                    UndoContent: "Annuler la dernière action.",
                    RedoContent: "Refaire la dernière action.",
                    HyperLinkTitle: "Ajouter un lien hypertexte",
                    HyperLinkContent: "Créer un lien dans votre document pour accéder rapidement aux pages Web et des fichiers.",
                    HyperLinkPlaceContent: " Hyperliens peut aussi vous emmener dans des endroits dans votre document.",
                    NewCommentTitle: "Insérez un commentaire",
                    NewCommentContent: "Ajouter une note sur cette partie du document.",
                    RefreshTitle: "Rafraîchir",
                    RefreshContent: "Obtenez les dernières données de la source reliée à la cellule active",
                    FieldListTitle: "Liste de champ",
                    FieldListContent: "Afficher ou masquer la liste des champs. ",
                    FieldListRemoveContent: " La liste des champs vous permet d'ajouter et de supprimer des champs de votre rapport de tableau croisé dynamique",
                    AddChartElement: "Ajouter Chart Element",
                    AddChartElementContent: "Ajouter des éléments à la liste créée.",
                    SwitchRowColumn: "Commutateur ligne / colonne",
                    SwitchRowColumnContent: "Échangez les données sur l'axe.",
                    MergeAlert: "Nous ne pouvons pas faire cela à une cellule fusionnée.",
                    UnhideDlgText: "Fiche Unhide:",
                    ChartThemes: "Graphique Thèmes",
                    ChartThemesContent: "Choisissez un nouveau thème pour votre tableau.",
                    ChangePicture: "Changer l'image",
                    ChangePictureContent: "Modifier une image différente, en conservant la mise en forme et la taille de l'image actuelle.",
                    ChangeChartType: "Modifier le type de graphique",
                    SelectData: "Sélectionner des données",
                    SelectDataContent: "Modifier la plage de données inclus dans le tableau.",
                    Sum: "Somme",
                    Average: "Moyenne",
                    CountNumber: "Count Numbers",
                    Max: "Max",
                    Min: "Min",
                    ChartType: "Modifier le type de graphique",
                    ChartTypeContent: "Changer pour un type de graphique différent.",
                    AllCharts: "Charts",
                    defaultfont: "Défaut",
                    LGeneral: "Général",
                    LCurrency: "Devise",
                    LAccounting: "Comptabilité",
                    LDate: "date",
                    LTime: "Temps",
                    LPercentage: "Pourcentage",
                    LFraction: "Fraction",
                    LScientific: "Scientifique",
                    LText: "Texte",
                    LCustom: "Coutume",
                    FormatSample: "Échantillon",
                    Category: "Catégorie:",
                    Top: "Meilleur",
                    Center: "centre",
                    Bottom: "Bas",
                    Left: "Gauche (Indent)",
                    Right: "Droite",
                    Justify: "Justifier",
                    GeneralTxt: "cellules générales format ont pas de format de numéro spécifique.",
                    NegativeNumbersTxt: "Nombres négatifs",
                    ThousandSeparatorTxt: "Utilisez 1000 Separator",
                    DecimalPlacesTxt: "Décimales:",
                    TextTxt: "cellules de format de texte sont traités comme du texte, même si un nombre est dans la cellule. La cellule est affiché exactement comme entré.",
                    BoldItalic: "Gras italique",
                    Regular: "Ordinaire",
                    HyperLinkHide: "<< Document >> Sélection en",
                    InvalidSheetIndex: "Spécifiez SheetIndex bon",
                    HugeDataAlert: "Fichier trop volumineux pour ouvrir.",
                    ImportExportUrl: "Donnez import / export URL et essayez à nouveau.",
                    BetweenAlert: "Le maximum doit être supérieur ou égal au minimum.",
                    BorderStyles: "Solide / pointillée / Dotted/Double",
                    FPaneAlert: "Geler Pane est pas appliquée pour la première cellule",
                    ReplaceNotFound: "Spreadsheet ne peut pas trouver une correspondance.",
                    BlankWorkbook: "classeur Blank",
                    SaveAsExcel: "Enregistrer sous Excel",
                    SaveAsCsv: "Enregistrer sous CSV",
                    SaveAsPdf: "Enregistrer sous PDF",
                    Design: "CONCEPTION",
                    NewName: "Nouveau nom",
                    FormulaBar: "Barre de formule",
                    NameBox: "Nom Box",
                    NumberValMsg: "Les valeurs décimales ne peuvent pas être utilisés pour des conditions numériques.",
                    NumberAlertMsg: "Entrez uniquement des chiffres.",
                    ListAlert: "plage de cellules est incorrect, entrez S'il vous plaît plage de cellules correcte.",
                    ListValAlert: "La source de la liste doit être une liste délimitée, ou une référence à la ligne ou une colonne unique.",
                    ListAlertMsg: "La valeur saisie est pas valide",
                    AutoFillTitle: "options de saisie automatique",
                    NewSheet: "Nouvelle feuille",
                    FullSheetCopyPasteAlert: "Nous ne peut pas coller parce que la zone de texte et de zone de collage ne sont pas la même taille.",
                    Heading: "Rubriques",
                    Gridlines: "Quadrillage",
                    Firstsheet: "Faites défiler jusqu'à la première feuille",
                    Lastsheet: "Faites défiler jusqu'à la dernière feuille",
                    Nextsheet: "Faites défiler jusqu'à la feuille suivante",
                    Prevsheet: "Faites défiler jusqu'à la feuille précédente",
                    ProtectWorkbook: "Protéger le classeur",
                    UnProtectWorkbook: "Ôter Workbook",
                    ProtectWBContent: "Gardez les autres de faire des changements structurels à votre classeur",
                    Password: "Mot de passe",
                    ConfirmPassword: "Re Entrez le mot de passe de procéder:",
                    PasswordAlert1: "mot de passe de confirmation ne sont pas identiques.",
                    PasswordAlert2: "Veuillez entrer un mot de passe.",
                    PasswordAlert3: "Le mot de passe que vous avez fourni est incorrect. Vérifiez que la touche VERR.MAJ est désactivée et assurez-vous d'utiliser la bonne capitalisation.",
                    Protect: "est protégé.",
                    Lock: "Lock Cell",
                    Unlock: "Débloquez cellulaire",
                    Protectsheet: "Protéger la feuille",
                    ProtectSheetToolTip: "Empêcher les modifications indésirables des autres en limitant leur capacité à modifier",
                    Unprotect: "Fiche Ôter",
                    LockAlert: "La cellule que vous essayez de changer est sur feuille protégée. Pour apporter des modifications, cliquez sur Feuille Unprotect dans l'onglet Révision.",
                    CreateRule: "Nouvelle règle",
                    NewRule: "Nouvelle règle de mise en forme",
                    NewRuleLabelContent: "Les valeurs de format où cette formule est vraie:",
                    InsertDeleteAlert: "Cette opération est interdite. L'opération tente de déplacer les cellules dans un tableau sur votre feuille de calcul.",
                    ReadOnly: "La gamme que vous essayez de changer contient lire uniquement les cellules.",
                    CreatePivotTable: "Créer Pivot Table",
                    Range: "Gamme:",
                    ChoosePivotTable: "Choisissez où vous voulez que le tableau croisé dynamique pour être placé",
                    NewWorksheet: "Nouvelle feuille de calcul",
                    ExistingWorksheet: "Feuille existante",
                    Location: "Emplacement:",
                    Refresh: "Rafraîchir",
                    PivotRowsAlert: "Cette commande nécessite au moins deux rangées de données source. Vous ne pouvez pas utiliser la commande sur une sélection dans une seule ligne.",
                    PivotLabelsAlert: "Le nom du champ de tableau croisé dynamique est pas valide, Pour créer un rapport de tableau croisé dynamique, vous devez utiliser les données qui sont organisées sous forme de liste avec des colonnes marquées. Si vous modifiez le nom d'un champ de tableau croisé dynamique, vous devez taper un nouveau nom pour le champ.",
                    FieldList: "Liste de champ",
                    MergeSortAlert: "Pour ce faire, toutes les cellules fusionnées doivent être de la même taille.",
                    FormulaSortAlert: "La gamme de tri avec la formule ne peut pas être triée.",
                    MergePreventInsertDelete: "Cette opération est interdite. L'opération tente de déplacer une des cellules de fusion sur votre feuille de calcul.",
                    FormulaRuleMsg: "S'il vous plaît entrer le format correct.",
                    MovePivotTable: "Déplacer Pivot Table",
                    MovePivotTableContent: "Déplacer le tableau croisé dynamique vers un autre emplacement dans le classeur.",
                    ClearAllContent: "Retirer les champs et les filtres.",
                    ChangeDataSource: "Modifier",
                    ChangeDataSourceContent: "Modifiez les données de source pour ce tableau croisé dynamique",
                    ChangePivotTableDataSource: "Changer PivotTable Data Source",
                    TotalRowAlert: "Cette opération est interdite. L'opération tente de déplacer les cellules dans un tableau sur votre feuille de calcul. Cliquez sur OK pour procéder à toute la ligne.",
                    CellTypeAlert: "Cette opération est autorisée dans le type de cellule gamme appliquée.",
                    PivotOverlapAlert: "Un rapport de tableau croisé dynamique ne peut pas chevaucher un autre rapport de tableau croisé dynamique",
                    NoCellFound: "Aucune cellule n'a été trouvé",
                    CorrectArgument: "Veuillez entrer le bon argument",
                    CorrectFormula: "Veuillez entrer la bonne formule",
                    CorrectCellAddress: "Entrez l'adresse de la cellule correcte",
                    ChartType: "Type de graphique",
                    NumberValidationAlert: "Le maximum doit être supérieur ou égal au minimum",
                    DateValidationAlert: "La date de fin doit être supérieure ou égale à Date de début",
                    TimeValidationAlert: "L'heure de fin doit être supérieure ou égale à Start Time",
                    NewRuleAlert: "Il y a un problème avec cette formule",
                    DragAlert: "La commande n'a pas pu être terminée lorsque vous tentez de déplacer des cellules dans la plage du filtre. Sélectionnez une plage hors de la portée du filtre et essayez de nouveau la commande.",
                    OR: "ou",
                    HOME: "MAISON",
                    INSERT: "INSÉRER",
                    DATATAB: "LES DONNÉES",
                    PAGELAYOUT: "MISE EN PAGE",
                    REVIEW: "LA REVUE",
                    OTHERS: "AUTRES",
                    FORMAT: "Format",
                    DESIGN: "CONCEPTION",
                    CHARTDESIGN: "Graphisme",
                    ANALYZE: "Analyser",
                    FileName: "Nom de fichier",
                    Save: "sauvegarder",
                    SaveFile: "Enregistrer le fichier",
                    HighlightCellRules: "Souligner les règles de la cellule",
                    LightRedFillDark: "Rouge clair Remplir avec un texte rouge foncé",
                    YellowFillDark: "Remplissage jaune avec texte jaune foncé",
                    GreenFillDark: "Remplissage vert avec texte vert foncé",
                    RedFill: "Red Fill",
                    RedText: "Texte rouge",
                    Column: "Colonne",
                    Bar: "Bar",
                    Line: "Ligne",
                    DataValidationType: "Numéro / Décimal / Date / Heure / Longueur de texte / Liste",
                    DataValidationAction: "Supérieur ou supérieur ou égal à / inférieur à / inférieur ou égal à / égal à / non égal à / entre / pas entre",
                    Modify: "Modifier",
                    Apply: "Appliquer",
                    NewCellStyle: "Nouveau style de cellule",
                    cellStyleAlert: "Ce nom de style existe déjà",
                    modifyCellStyleAlert: "Ce nom de style n'existe pas",
                    Color: "Couleur",
                    StyleName: "Nom du style",
                    LShortdate: "Date courte",
                    LLongdate: "Longue date",
                    Clipboard: "Presse-papiers",
                    Font: "fonte",
                    Actions: "actes",
                    Styles: "styles",
                    Editing: "rédaction",
                    Tables: "tableaux",
                    Illustrations: "illustrations",
                    Links: "gauche",
                    Charts: "hit-parade",
                    DataTools: "Outils de données",
                    Show: "spectacle",
                    PageLayout: "Mise en page",
                    Changes: "Les changements",
                    Window: "fenêtre",
                    Cells: "cellules",
                    Calculation: "calcul",
                    Properties: "propriétés",
                    Tools: "outils",
                    TableStyleOption: "Options de style de table",
                    ChartLayouts: "Mise en page des graphiques",
                    ChartDesignData: "données",
                    ChartDesignType: "qualité",
                    ChartDesignSize: "taille",
                    Adjust: "régler",
                    FormatSize: "taille",
                    AnalyzePivotTable: "Tableau croisé dynamique",
                    DataSource: "DataSource",
                    FATTitlePrefix: "Style de table",
                    HighPoint: "Point haut",
                    LowPoint: "Point bas",
                    FirstPoint: "Premier point",
                    LastPoint: "Dernier point",
                    NegativePoint: "Points négatifs",
                    Markers: "Marqueurs",
                    NegativePoints: "Points négatifs",
                    LineSparklineTitle: "Insérer Line Sparkline",
                    LineSparklineContent: "Les sparklines sont des mini-graphiques placés dans une seule cellule, chacun représentant une rangée de données dans votre sélection",
                    ColumnSparklineTitle: "Insérer une colonne Sparkline",
                    ColumnSparklineContent: "Les sparklines sont des mini-graphiques placés dans une seule cellule, chacun représentant une rangée de données dans votre sélection",
                    WinLossSparklineTitle: "Insérer Win / Loss Sparkline",
                    WinLossSparklineContent: "Les sparklines sont des mini-cartes placées dans une seule cellule, chacune représentant une rangée de données dans votre sélection,",
                    Line: "Ligne",
                    SparklineColor: "Couleur Sparkline",
                    SparklineColorTitle: "Couleur Sparkline",
                    SparklineColorContent: "Spécifiez la couleur des sparklines dans le groupe sparkline sélectionné",
                    MarkerColor: "Couleur du marqueur",
                    MarkerColorContent: "Changez la couleur pour les points négatifs, les marqueurs et tous les autres points pour le groupe sparkline sélectionné",
                    ChooseDataRange: "Choisissez la plage de données",
                    ChooseLocationRange: "Choisissez la plage d'emplacement",
                    DataRange: "Plage de données",
                    LocationRange: "Plage d'emplacement",
                    EmptyDLRnge: "La source de données ou la référence de lieu n'est pas valide",
                    SourceDataRange: "Sélectionnez une plage de données source pour la sparkline",
                    SparklineAlert: "La référence de localisation n'est pas valide car les cellules ne sont pas toutes dans la même colonne ou la même ligne. Sélectionnez les cellules qui sont toutes dans une seule ligne ou une seule colonne",
                    SparklineDataAlert: "Entrez le format de données correct",
                    SparklineLocAlert: "La référence pour l'emplacement ou la plage de données n'est pas valide",
                    SDataRangeAlert: "La référence de la source de données n'est pas valide",
                    LineAlert: "Impossible de créer le graphique linéaire pour une seule valeur",
                    EditData: "Modifier les données",
                    EditDataContent: "Modifier le lieu et les données du groupe",
                    EditSingleSparklineData: "Modifier les données Single Sparkline",
                    EditSparklineData: "Modifier les données sparkline",
                    HiddenEmptyCells: "Cellules cachées et vides",
                    SwitchRowCol: "Commutateur ligne / colonne",
                    CreateSparkline: "Créer Sparkline",
                    SelectDataSource: "Sélectionnez une plage de données source pour la sparkline",
                    SPARKLINEDESIGN: "Sparkline Design",
                };
                break;
            case "ejTimePicker":
                ej.TimePicker.Locale = ej.TimePicker.Locale || {};
                ej.TimePicker.Locale["fr-FR"] = {
                    watermarkText: "sélectionnez une heure",
                };
                break;
            case "ejTreeGrid":
                ej.TreeGrid.Locale = ej.TreeGrid.Locale || {};
                ej.TreeGrid.Locale["fr-FR"] = {
                    toolboxTooltipTexts: {
                        addTool: "Ajouter",
                        editTool: "modifier",
                        updateTool: "Mettre à jour",
                        deleteTool: "Effacer",
                        cancelTool: "Annuler",
                        expandAllTool: "Développer tout",
                        collapseAllTool: "Réduire tout",
                        pdfExportTool: "PDF exportation",
                        excelExportTool: "Exportation Excel",
                        printTool: "Impression",
                        searchTool: "Chercher"
                    },
                    contextMenuTexts: {
                        addRowText: "Ajouter une rangée",
                        editText: "modifier",
                        deleteText: "Effacer",
                        saveText: "sauvegarder",
                        cancelText: "Annuler",
                        aboveText: "Au dessus de",
                        belowText: "Au dessous de"
                    },
                    columnMenuTexts: {
                        sortAscendingText: "Trier par ordre croissant",
                        sortDescendingText: "Trier par ordre décroissant",
                        columnsText: "colonnes",
                        freezeText: "Gel",
                        unfreezeText: "Dégeler",
                        freezePrecedingColumnsText: "Figer les colonnes antérieures à",
                        insertColumnLeft: "Insérez la colonne de gauche",
                        insertColumnRight: "Insérez la colonne de droite",
                        deleteColumn: "Supprimer la colonne",
                        renameColumn: "Renommer la colonne",
                        menuFilter: "Filtre"
                    },
                    filterMenuTexts: {
                        stringMenuOptions: [
                            { text: "Commence avec", value: "startswith" },
                            { text: "Se termine par", value: "endswith" },
                            { text: "Contient", value: "contains" },
                            { text: "Équivaut à", value: "equal" },
                            { text: "N'est pas égal", value: "notequal" }
                        ],
                        numberMenuOptions: [
                            { text: "Moins que", value: "lessthan" },
                            { text: "Plus grand que", value: "greaterthan" },
                            { text: "Inférieur ou égal à", value: "lessthanorequal" },
                            { text: "Plus grand ou égal à", value: "greaterthanorequal" },
                            { text: "Équivaut à", value: "equal" },
                            { text: "N'est pas égal", value: "notequal" }
                        ],
                        filterValue: "Valeur du filtre",
                        filterButton: "Filtre",
                        clearButton: "Clair",
                        enterValueText: "entrer la valeur"
                    },
                    columnDialogTexts: {
                        field: "Champ",
                        headerText: "En-tête",
                        editType: "Modifier le type",
                        filterEditType: "Modifier le type de filtre",
                        allowFiltering: "Autoriser le filtrage",
                        allowFilteringBlankContent: "Autoriser le filtrage du contenu Blank",
                        allowSorting: "Autoriser tri",
                        visible: "Visible",
                        width: "Largeur",
                        textAlign: "Alignement du texte",
                        headerTextAlign: "Alignement du texte en-tête",
                        isFrozen: "Est gelé",
                        allowFreezing: "Autoriser congélation",
                        columnsDropdownData: "Colonne Chute de données vers le bas",
                        dropdownTableText: "Texte",
                        dropdownTableValue: "Valeur",
                        addData: "Ajouter",
                        deleteData: "Retirer",
                        allowCellSelection: "Autoriser la sélection de cellules",
                        showInColumnChooser: "Afficher dans le sélecteur de colonne",
                        displayAsCheckbox: "Affichage en tant que case à cocher",
                        clipMode: "Mode Clip",
                        tooltip: "Info-bulle",
                        headerTooltip: "Header Tooltip"
                    },
                    editTypeTexts: {
                        string: "Chaîne",
                        numeric: "Numérique",
                        datePicker: "Sélecteur de date",
                        dateTimePicker: "Date Time Picker",
                        dropdown: "Menu déroulant",
                        boolean: "Boolean"
                    },
                    textAlignTypes: {
                        right: "Droite",
                        left: "La gauche",
                        center: "centre"
                    },
                    clipModeTexts: {
                        clip: "Agrafe",
                        ellipsis: "Ellipse"
                    },
                    columnDialogTitle: {
                        insertColumn: "Insérer une colonne",
                        deleteColumn: "Supprimer la colonne",
                        renameColumn: "Renommer la colonne"
                    },
                    deleteColumnText: "Êtes-vous sûr de vouloir supprimer cette colonne?",
                    deleteRecordText: "Êtes-vous sûr de vouloir supprimer l'enregistrement?",
                    okButtonText: "D'accord",
                    cancelButtonText: "Annuler",
                    confirmDeleteText: "Confirmation de la suppression",
                    dropDownListBlanksText: "(Vides)",
                    dropDownListClearText: "(Effacer le filtre)",
                    trueText: "Vrai",
                    falseText: "Faux",
                    emptyRecord: "Aucun enregistrement à afficher",
                };
                break;
            case "ejUploadbox":
                ej.Uploadbox.Locale = ej.Uploadbox.Locale || {};
                ej.Uploadbox.Locale["fr-FR"] = {
                    buttonText: {
                        upload: "Télécharger",
                        browse: "Feuilleter",
                        cancel: "Annuler",
                        close: "Fermer"
                    },
                    dialogText: {
                        title: "Télécharger Box",
                        name: "prénom",
                        size: "Taille",
                        status: "statut"
                    },
                    dropAreaText: "Déposer des fichiers ou cliquer pour télécharger",
                    filedetail: "La taille du fichier est trop grand. S'il vous plaît sélectionner un fichier dans le format valide.",
                    denyError: "Fichiers avec des extensions #Extension ne sont pas autorisés.",
                    allowError: "Seuls les fichiers avec les extensions de #Extension sont autorisés.",
                    cancelToolTip: "Annuler",
                    removeToolTip: "Retirer",
                    retryToolTip: "Recommencez",
                    completedToolTip: "Terminé",
                    failedToolTip: "Échoué",
                    closeToolTip: "Fermer",
                };
                break;
            case "ejSpellCheck":
                ej.SpellCheck.Locale = ej.SpellCheck.Locale || {};
                ej.SpellCheck.Locale["fr-FR"] = {
                    SpellCheckButtonText: "Orthographe",
                    NotInDictionary: "Not in Dictionnaire",
                    SuggestionLabel: "Suggestions",
                    IgnoreOnceButtonText: "Ignorer une fois",
                    IgnoreAllButtonText: "Ignorer tout",
                    AddToDictionary: "Ajouter au dictionnaire",
                    ChangeButtonText: "Changement",
                    ChangeAllButtonText: "Tout modifier",
                    CloseButtonText: "Fermer",
                    CompletionPopupMessage: "Vérification orthographique est terminée",
                    CompletionPopupTitle: "Vérification orthographique",
                    Ok: "D'accord",
                    NoSuggestionMessage: "Aucune suggestion disponible"
                };
                break;
            case "ejMediaPlayer":
                ej.MediaPlayer.Locale = ej.MediaPlayer.Locale || {};
                ej.MediaPlayer.Locale["fr-FR"] = {
                    "Play": "jouer",
                    "Pause": "Pause",
                    "Mute": "Muet",
                    "Unmute": "Réactiver",
                    "Settings": "Paramètres",
                    "FullScreen": "Plein écran",
                    "ExitFullScreen": "Quitter le mode plein écran",
                    "HidePlaylist": "Cacher la playlist",
                    "Previous": "précédent",
                    "Next": "Prochain",
                    "TogglePlaylist": "Toggle Playlist",
                    "Rewind": "Rembobiner",
                    "Forward": "Vers l'avant",
                    "Playlist": "Playlist",
                    "RepeatPlaylist": "Répéter la liste de lecture",
                    "Shuffle": "Shuffle",
                    "VideoTitle": "Vidéo",
                    "PlaylistTitle": "Playlist",
                    "PlaylistItemName": "Élément de liste",
                    "PlaylistItemAuthor": "Auteur",
                    "Media": "Médias",
                    "Speed": "La vitesse",
                    "Quality": "Qualité",
                    "Normal": "Normal",
                    "Auto": "Auto"
                };
                break;
            case "ejTile":
                ej.Tile.Locale = ej.Tile.Locale || {};
                ej.Tile.Locale["fr-FR"] = {
                    captionText: "texte"
                };
                break;
            case "ejListView":
                ej.ListView.Locale = ej.ListView.Locale || {};
                ej.ListView.Locale["fr-FR"] = {
                    headerTitle: "Titre",
                    headerBackButtonText: "Arrière"
                };

                break;
        }
    }
    widgets = ej.widget.registeredWidgets;
    for (name in widgets)
        $.fn.Locale_frFR(name);
    if (ej.ExcelFilter)
        $.fn.Locale_frFR("ejExcelFilter");
})(window.jQuery, window.Syncfusion);