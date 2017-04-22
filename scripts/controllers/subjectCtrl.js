app.controller('SubjectController', function($scope, DTOptionsBuilder){
	// Subjects only have children, not grandchildren.
	subjects = 
	[
		{
			sub_id: 1, subid: null, subname:'Khoa học',
			childsubjects:[
				{sub_id: 2, subid: 1, subname:'Toán'},
				{sub_id: 3, subid: 1, subname:'Lý'}
			]
		},
		{
			sub_id: 4, subid: null, subname:'Thất học',
			childsubjects:[
				{sub_id: 5, subid: 4, subname:'Boxing'},
				{sub_id: 6, subid: 4, subname:'Muay Thai'}
			]
		},

	]
	array = [];
	subjectsLength = subjects.length;
	for(i = 0; i < subjectsLength; i++)
    {
        subjects[i].level = 1;
        childSubjectsLength = subjects[i].childsubjects.length;
        temp = JSON.parse(JSON.stringify(subjects[i]));
        delete temp.childsubjects;
        array.push(temp);

        for( j = 0; j < childSubjectsLength; j++){
        	childSubject = subjects[i].childsubjects[j];
        	childSubject.level = 2;
        	array.push(childSubject);
        }
    }
    //console.log(array);
	$scope.subjects = array;
});